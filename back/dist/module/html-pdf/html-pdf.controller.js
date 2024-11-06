"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlPdfController = void 0;
const common_1 = require("@nestjs/common");
const html_pdf_service_1 = require("./html-pdf.service");
const path = require("path");
const fs = require("fs");
const report_service_1 = require("../report/report.service");
const Handlebars = require("handlebars");
const ejs = require("ejs");
let HtmlPdfController = class HtmlPdfController {
    constructor(htmlPdfService, reportService) {
        this.htmlPdfService = htmlPdfService;
        this.reportService = reportService;
    }
    async download_test(res) {
        try {
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
        }
        catch (error) {
            console.error('Error al generar el PDF:', error);
            res.status(500).send('Error al generar el PDF');
        }
    }
    async download_template(res) {
        try {
            const templatePath = path.join(__dirname, '..', '..', '..', 'templates', 'template-html-pdf.ejs');
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
            const htmlContent = await ejs.renderFile(templatePath, {
                title: 'Listado de Productos',
                products: tempData,
            });
            const pdfBuffer = await this.htmlPdfService.generatePdfHeadFooter({
                content: htmlContent,
            });
            res.set({
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="productos.pdf"',
                'Content-Length': pdfBuffer.length,
            });
            res.end(pdfBuffer);
        }
        catch (error) {
            console.error('Error al generar el PDF:', error);
            res.status(500).send('Error al generar el PDF');
        }
    }
    async render_template(res) {
        try {
            const templatePath = path.join(__dirname, '..', '..', '..', 'templates', 'template-html-pdf.ejs');
            const tempData = [
                { id: 1, name: 'Product 1', image: 'http://localhost:3000/imgs/img1.jpg?1' },
                { id: 2, name: 'Product 2', image: 'http://localhost:3000/imgs/img1.jpg?2' },
                { id: 3, name: 'Product 3', image: 'http://localhost:3000/imgs/img1.jpg?3' },
            ];
            const htmlContent = await ejs.renderFile(templatePath, {
                title: 'Listado de Productos',
                products: tempData,
            });
            res.setHeader('Content-Type', 'text/html');
            res.send(htmlContent);
        }
        catch (error) {
            console.error('Error al renderizar el archivo EJS:', error);
            res.status(500).send('Error al renderizar el archivo EJS');
        }
    }
    findAll() {
        return this.htmlPdfService.findAll();
    }
    async download(mbl_code, res) {
        try {
            const report = await this.findOne_mbl_code(mbl_code);
            if (!report)
                throw new common_1.NotFoundException('Report not found');
            const templatePath = path.join(__dirname, '..', '..', '..', 'templates', 'template.html');
            const templateHtml = fs.readFileSync(templatePath, 'utf8');
            const template = Handlebars.compile(templateHtml);
            const htmlContent = template(report);
            const pdfBuffer = await this.htmlPdfService.generatePdf({
                content: htmlContent,
            });
            res.set({
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="${mbl_code}.pdf"`,
                'Content-Length': pdfBuffer.length,
            });
            res.end(pdfBuffer);
        }
        catch (error) {
            console.error('Error al generar el PDF:', error);
            res.status(500).send('Error al generar el PDF');
        }
    }
    async findOne(mbl_code) {
        const report = await this.reportService.findOne(mbl_code);
        if (!report)
            throw new common_1.NotFoundException('Report not found');
        return report;
    }
    async findOne_mbl_code(mbl_code) {
        const report = await this.reportService.findOne(mbl_code);
        if (!report)
            throw new Error('Report not found');
        return report;
    }
    getBase64Image(imagePath) {
        const image = fs.readFileSync(path.resolve(__dirname, '..', '..', '..', imagePath));
        return Buffer.from(image).toString('base64');
    }
};
exports.HtmlPdfController = HtmlPdfController;
__decorate([
    (0, common_1.Get)('download_test'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HtmlPdfController.prototype, "download_test", null);
__decorate([
    (0, common_1.Get)('download_template'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HtmlPdfController.prototype, "download_template", null);
__decorate([
    (0, common_1.Get)('render_template'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HtmlPdfController.prototype, "render_template", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HtmlPdfController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('download/:mbl_code'),
    __param(0, (0, common_1.Param)('mbl_code')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], HtmlPdfController.prototype, "download", null);
__decorate([
    (0, common_1.Get)(':mbl_code'),
    __param(0, (0, common_1.Param)('mbl_code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HtmlPdfController.prototype, "findOne", null);
exports.HtmlPdfController = HtmlPdfController = __decorate([
    (0, common_1.Controller)('html-pdf'),
    __metadata("design:paramtypes", [html_pdf_service_1.HtmlPdfService,
        report_service_1.ReportService])
], HtmlPdfController);
//# sourceMappingURL=html-pdf.controller.js.map