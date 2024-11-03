import { Controller, Get, NotFoundException, Param, Res } from '@nestjs/common';
import { HtmlPdfService } from './html-pdf.service';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import { ReportService } from '../report/report.service';

@Controller('html-pdf')
export class HtmlPdfController {
  constructor(
    private readonly htmlPdfService: HtmlPdfService,
    private readonly reportService: ReportService,
  ) {}

  @Get('test')
  async createPdf(@Res() res: Response) {
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

  @Get()
  findAll() {
    return this.htmlPdfService.findAll();
  }

  @Get('download/:mbl_code')
  async download(@Param('mbl_code') mbl_code: string) {
    const find_mbl_code = await this.findOne_mbl_code(mbl_code);
    return find_mbl_code;
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
