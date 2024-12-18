import { Injectable } from '@nestjs/common';
import { CreateHtmlPdfDto } from './dto/create-html-pdf.dto';
import { UpdateHtmlPdfDto } from './dto/update-html-pdf.dto';
import * as pdf from 'html-pdf';

@Injectable()
export class HtmlPdfService {
  async generatePdf(data: any): Promise<Buffer> {
    const options = {
      format: process.env.PDF_FORMAT || 'A3',
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

  async generatePdfHeadFooter(data: any): Promise<Buffer> {
    const options = {
      format: process.env.PDF_FORMAT || 'A3',
      border: {
        top: '1in',
        right: '1in',
        bottom: '1in',
        left: '1in',
      },
      header: {
        height: '1.7in',
        contents: `
        <div>
          <b>
            <p>FLAVIO A. PREZIOSA</p>
            <p>Habana 2874 - 1419 - Buenos Aires - Argentina</p>
            <p>M +54 911 6677 2741</p>
            <p>flaviopreziosa@gmail.com / flaviopreziosa@fibertel.com.ar</p>
            <hr>
          </b>
        </div>
          `,
      },
      footer: {
        height: '1in',
        contents: {
          default:
            '<div style="text-align: center;">Página {{page}} de {{pages}}</div>',
        },
      },
      dpi: 300,
      zoomFactor: '1',
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
