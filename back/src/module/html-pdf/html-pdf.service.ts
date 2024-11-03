import { Injectable } from '@nestjs/common';
import { CreateHtmlPdfDto } from './dto/create-html-pdf.dto';
import { UpdateHtmlPdfDto } from './dto/update-html-pdf.dto';
import * as pdf from 'html-pdf';

@Injectable()
export class HtmlPdfService {
  async generatePdf(data: any): Promise<Buffer> {
    const options = {
      format: 'A3',
      border: {
        top: '1in',
        right: '1in',
        bottom: '1in',
        left: '1in',
      },
      // Asegurar el tamaño consistente en diferentes entornos
      dpi: 300,
      zoomFactor: '1', // Ajustar el factor de zoom
    };

    return new Promise((resolve, reject) => {
      pdf.create(data.content, options).toBuffer((err, buffer) => {
        if (err) {
          reject(err);
        } else {
          resolve(buffer);
        }
      });
    });
  }

  findAll() {
    return `This action returns all htmlPdf`;
  }

  download() {
    return `This action returns all htmlPdf`;
  }
}
