"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlPdfService = void 0;
const common_1 = require("@nestjs/common");
const pdf = require("html-pdf");
let HtmlPdfService = class HtmlPdfService {
    async generatePdf(data) {
        const options = {
            format: 'A3',
            border: {
                top: '1in',
                right: '1in',
                bottom: '1in',
                left: '1in',
            },
            dpi: 300,
            zoomFactor: '1',
        };
        return new Promise((resolve, reject) => {
            pdf.create(data.content, options).toBuffer((err, buffer) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(buffer);
                }
            });
        });
    }
    async generatePdfHeadFooter(data) {
        const options = {
            format: 'A4',
            border: {
                right: '0.3in',
                left: '0.3in',
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
                    default: '<div style="text-align: center;">Página {{page}} de {{pages}}</div>',
                },
            },
            dpi: 300,
            zoomFactor: '1',
        };
        return new Promise((resolve, reject) => {
            pdf.create(data.content, options).toBuffer((err, buffer) => {
                if (err) {
                    reject(err);
                }
                else {
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
};
exports.HtmlPdfService = HtmlPdfService;
exports.HtmlPdfService = HtmlPdfService = __decorate([
    (0, common_1.Injectable)()
], HtmlPdfService);
//# sourceMappingURL=html-pdf.service.js.map