// back/src/modules/final-report/final-report.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UploadedFiles,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs_extra from 'fs-extra';
import { HtmlPdfService } from '../html-pdf/html-pdf.service';
import * as fs from 'fs';
import * as path from 'path';
import { Response } from 'express';
import { PreDamageService } from './5pre-damage.service';
import { PreDamageEntity } from './entity-dtos/5pre-damage.entity';

@Controller('pre-damage')
export class PreDamageController {
  constructor(
    private readonly pdfService: HtmlPdfService,
    private readonly finalReportService: PreDamageService,
  ) {}

  @Get()
  findAll() {
    return this.finalReportService.findAll();
  }

  // Endpoint para obtener un reporte final por número MBL
  @Get('byMBL/:mbl')
  findByMBL(@Param('mbl') mbl: string) {
    return this.finalReportService.findByMBL(mbl);
  }

  @Get('findAllByMBL/:mbl')
  findAllByMBL(@Param('mbl') mbl: string) {
    return this.finalReportService.findAllByMBL(mbl);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.finalReportService.findOne(id);
  }

  @Post()
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      // Permitimos hasta 10 archivos
      storage: diskStorage({
        // destination: './uploads/images', // Directorio donde se guardan las imágenes
        destination: async (req, file, callback) => {
          const uploadPath = './uploads/images';
          await fs_extra.ensureDir(uploadPath); // Crea el directorio si no existe
          callback(null, uploadPath);
        },
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const fileExt = file.originalname.split('.').pop();
          const filename = `${file.fieldname}-${uniqueSuffix}.${fileExt}`;
          callback(null, filename);
        },
      }),
    }),
  )
  create(
    @Body() finalReport: PreDamageEntity,
    @UploadedFiles() images: Express.Multer.File[],
  ) {
    return this.finalReportService.create(finalReport, images);
  }

  @Put(':id')
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      storage: diskStorage({
        // destination: './uploads/images',
        destination: async (req, file, callback) => {
          const uploadPath = './uploads/images';
          await fs_extra.ensureDir(uploadPath); // Crea el directorio si no existe
          callback(null, uploadPath);
        },
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const fileExt = file.originalname.split('.').pop();
          const filename = `${file.fieldname}-${uniqueSuffix}.${fileExt}`;
          callback(null, filename);
        },
      }),
    }),
  )
  update(
    @Param('id') id: number,
    @Body() finalReport: PreDamageEntity,
    @UploadedFiles() images: Express.Multer.File[],
  ) {
    return this.finalReportService.update(id, finalReport, images);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.finalReportService.remove(id);
  }

  // ==========  ==========
  @Get('/byMBL-pdf/:mbl')
  async generatePdfByMBL(@Res() res: Response, @Param('mbl') mbl: string) {
    // Obtener todos los reportes por número MBL
    const finalReports = await this.finalReportService.findAllByMBL(mbl);

    if (!finalReports || finalReports.length === 0) {
      throw new Error('No se encontraron reportes con ese MBL');
    }

    // Generar el HTML dinámicamente para cada reporte y sus imágenes
    const reportsHtml = finalReports
      .map((report) => {
        const imagesHtml = report.images
          .map(
            (image) =>
              `<img src="data:image/png;base64,${this.getBase64Image(image.path)}" />`,
          )
          .join('');

        return /* html */ `
        <div class="report-box">
          <table cellpadding="0" cellspacing="0">
            <tr class="heading">
              <td colspan="2">Detalles del Reporte Final</td>
            </tr>
            <tr class="item">
              <td>id:</td>
              <td>${report.id}</td>
            </tr>
            <tr class="item">
              <td>B/L No:</td>
              <td>${report.bLNo}</td>
            </tr>
            <tr class="item">
              <td>Consignee:</td>
              <td>${report.consignee}</td>
            </tr>
            <tr class="item">
              <td>Marks:</td>
              <td>${report.marks}</td>
            </tr>
            <tr class="item">
              <td>Qty. of pkgs.:</td>
              <td>${report.qtyPkgs}</td>
            </tr>
            <tr class="item">
              <td>Remarks:</td>
              <td>${report.remarks}</td>
            </tr>
            <tr class="item">
              <td>Pallet:</td>
              <td>${report.pallet}</td>
            </tr>
            <tr class="item">
              <td>Legend:</td>
              <td>${report.legend}</td>
            </tr>
            <tr class="images">
              <td colspan="2">${imagesHtml}</td>
            </tr>
          </table>
        </div>
        <hr />
      `;
      })
      .join('');

    const htmlContent = /* html */ `
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; }
          .report-box { margin: 20px; }
          .heading { font-weight: bold; background: #eee; }
          .item { margin-bottom: 10px; }
          .images img { width: 200px; height: auto; margin: 10px; border: 1px solid #ddd; }
        </style>
      </head>
      <body>
        ${reportsHtml}
      </body>
      </html>
    `;

    const pdfBuffer = await this.pdfService.generatePdf({
      content: htmlContent,
    });

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="final-report-${mbl}.pdf"`,
      'Content-Length': pdfBuffer.length,
    });

    res.end(pdfBuffer);
  }

  // Método para convertir una imagen a base64
  private getBase64Image(imagePath: string): string {
    const image = fs.readFileSync(
      path.resolve(__dirname, '..', '..', '..', imagePath),
    );
    return Buffer.from(image).toString('base64');
  }
}
