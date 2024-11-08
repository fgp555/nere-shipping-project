import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Res,
  Req,
} from '@nestjs/common';
import { HtmlPdfService } from './html-pdf.service';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import { ReportService } from '../report/report.service';
import * as Handlebars from 'handlebars';
import * as ejs from 'ejs';
import { Request } from 'express';

@Controller('html-pdf')
export class HtmlPdfController {
  constructor(
    private readonly htmlPdfService: HtmlPdfService,
    private readonly reportService: ReportService,
  ) {}

  @Get()
  findAll() {
    // return `This action returns all htmlPdf`;
    return this.htmlPdfService.findAll();
  }

  @Get('download_test')
  async download_test(@Res() res: Response) {
    try {
      // Generar el contenido HTML
      const htmlContent = `<h1>test</h1>`;

      const pdfBuffer = await this.htmlPdfService.generatePdf({
        content: htmlContent,
      });
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="test.pdf"',
        'Content-Length': pdfBuffer.length,
      });
      res.end(pdfBuffer);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      res.status(500).send('Error al generar el PDF');
    }
  }

  @Get('download_template')
  async download_template(@Res() res: Response) {
    try {
      // Ruta al archivo EJS
      const templatePath = path.join(
        __dirname,
        '../../../templates/mbl_code_basic.ejs',
      );

      // Datos temporales para la plantilla
      const tempData = [
        {
          id: 1,
          name: 'Product 1',
          image: 'http://localhost:3000/imgs/img1.jpg?1',
        },
        {
          id: 2,
          name: 'Product 2',
          image: 'http://localhost:3000/imgs/img1.jpg?2',
        },
        {
          id: 3,
          name: 'Product 3',
          image: 'http://localhost:3000/imgs/img1.jpg?3',
        },
      ];

      // Renderizar el contenido del archivo EJS con los datos
      const htmlContent = await ejs.renderFile(templatePath, {
        title: 'Listado de Productos',
        data: tempData,
      });

      // Generar el PDF utilizando el HTML renderizado
      const pdfBuffer = await this.htmlPdfService.generatePdfHeadFooter({
        content: htmlContent,
      });

      // Configurar y enviar el PDF como respuesta
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="download_template.pdf"',
        'Content-Length': pdfBuffer.length,
      });
      res.end(pdfBuffer);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      res.status(500).send('Error al generar el PDF');
    }
  }

  @Get('render/:mbl_code')
  async render_template(
    @Param('mbl_code') mbl_code: string,
    @Res() res: Response,
    @Req() request: Request,
  ) {
    try {
      const report = await this.findOne_mbl_code(mbl_code);
      if (!report) throw new NotFoundException('Report not found');

      const templatePath = path.join(
        __dirname,
        '../../../templates/mbl_code_data.ejs',
      );

      const PROTOCOL_HOST =
        process.env.PROTOCOL_HOST || 'https://fpshippingsolutions.com';

      const htmlContent = await ejs.renderFile(templatePath, {
        title: `Report ${mbl_code}`,
        report: report,
        PROTOCOL_HOST: PROTOCOL_HOST,
      });

      res.setHeader('Content-Type', 'text/html');
      res.send(htmlContent);
    } catch (error) {
      console.error('Error al renderizar el archivo EJS:', error);
      res.status(500).send('Error al renderizar el archivo EJS');
    }
  }

  @Get('download/:mbl_code')
  async download(
    @Param('mbl_code') mbl_code: string,
    @Res() res: Response,
    @Req() request: Request,
  ) {
    try {
      const report = await this.findOne_mbl_code(mbl_code);
      if (!report) throw new NotFoundException('Report not found');

      // Cargar la plantilla HTML
      const templatePath = path.join(
        __dirname,
        '../../../templates/mbl_code_data.ejs',
      );

      const PROTOCOL_HOST =
        process.env.PROTOCOL_HOST || 'https://fpshippingsolutions.com';

      // Renderizar el contenido del archivo EJS con los datos
      const htmlContent = await ejs.renderFile(templatePath, {
        title: `Report ${mbl_code}`,
        report: report,
        PROTOCOL_HOST: PROTOCOL_HOST,
      });

      // Generar el PDF utilizando el HTML renderizado
      const pdfBuffer = await this.htmlPdfService.generatePdfHeadFooter({
        content: htmlContent,
      });

      // Configurar y enviar el PDF como respuesta
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${mbl_code}.pdf"`,
        'Content-Length': pdfBuffer.length,
      });
      res.end(pdfBuffer);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      res.status(500).send('Error al generar el PDF');
    }
  }

  @Get(':mbl_code')
  async findOne(@Param('mbl_code') mbl_code: string) {
    const report = await this.reportService.findOne(mbl_code);
    if (!report) throw new NotFoundException('Report not found');
    return report;
  }

  private async findOne_mbl_code(mbl_code: string) {
    const report = await this.reportService.findOne(mbl_code);
    if (!report) throw new Error('Report not found');
    return report;
  }

  // Método para convertir una imagen a base64
  private getBase64Image(imagePath: string): string {
    const image = fs.readFileSync(
      path.resolve(__dirname, '..', '..', '..', imagePath),
    );
    return Buffer.from(image).toString('base64');
  }
}
