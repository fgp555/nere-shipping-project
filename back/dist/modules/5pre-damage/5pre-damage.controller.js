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
exports.PreDamageController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const fs_extra = require("fs-extra");
const html_pdf_service_1 = require("../html-pdf/html-pdf.service");
const fs = require("fs");
const path = require("path");
const _5pre_damage_service_1 = require("./5pre-damage.service");
const _5pre_damage_entity_1 = require("./entity-dtos/5pre-damage.entity");
let PreDamageController = class PreDamageController {
    constructor(pdfService, finalReportService) {
        this.pdfService = pdfService;
        this.finalReportService = finalReportService;
    }
    findAll() {
        return this.finalReportService.findAll();
    }
    findByMBL(mbl) {
        return this.finalReportService.findByMBL(mbl);
    }
    findAllByMBL(mbl) {
        return this.finalReportService.findAllByMBL(mbl);
    }
    findOne(id) {
        return this.finalReportService.findOne(id);
    }
    create(finalReport, images) {
        return this.finalReportService.create(finalReport, images);
    }
    update(id, finalReport, images) {
        return this.finalReportService.update(id, finalReport, images);
    }
    remove(id) {
        return this.finalReportService.remove(id);
    }
    async generatePdfByMBL(res, mbl) {
        const finalReports = await this.finalReportService.findAllByMBL(mbl);
        if (!finalReports || finalReports.length === 0) {
            throw new Error('No se encontraron reportes con ese MBL');
        }
        const reportsHtml = finalReports
            .map((report) => {
            const imagesHtml = report.images
                .map((image) => `<img src="data:image/png;base64,${this.getBase64Image(image.path)}" />`)
                .join('');
            return `
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
        const htmlContent = `
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
    getBase64Image(imagePath) {
        const image = fs.readFileSync(path.resolve(__dirname, '..', '..', '..', imagePath));
        return Buffer.from(image).toString('base64');
    }
};
exports.PreDamageController = PreDamageController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PreDamageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('byMBL/:mbl'),
    __param(0, (0, common_1.Param)('mbl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PreDamageController.prototype, "findByMBL", null);
__decorate([
    (0, common_1.Get)('findAllByMBL/:mbl'),
    __param(0, (0, common_1.Param)('mbl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PreDamageController.prototype, "findAllByMBL", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PreDamageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: async (req, file, callback) => {
                const uploadPath = './uploads/images';
                await fs_extra.ensureDir(uploadPath);
                callback(null, uploadPath);
            },
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const fileExt = file.originalname.split('.').pop();
                const filename = `${file.fieldname}-${uniqueSuffix}.${fileExt}`;
                callback(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_5pre_damage_entity_1.PreDamageEntity, Array]),
    __metadata("design:returntype", void 0)
], PreDamageController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: async (req, file, callback) => {
                const uploadPath = './uploads/images';
                await fs_extra.ensureDir(uploadPath);
                callback(null, uploadPath);
            },
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const fileExt = file.originalname.split('.').pop();
                const filename = `${file.fieldname}-${uniqueSuffix}.${fileExt}`;
                callback(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, _5pre_damage_entity_1.PreDamageEntity, Array]),
    __metadata("design:returntype", void 0)
], PreDamageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PreDamageController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/byMBL-pdf/:mbl'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('mbl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PreDamageController.prototype, "generatePdfByMBL", null);
exports.PreDamageController = PreDamageController = __decorate([
    (0, common_1.Controller)('pre-damage'),
    __metadata("design:paramtypes", [html_pdf_service_1.HtmlPdfService,
        _5pre_damage_service_1.PreDamageService])
], PreDamageController);
//# sourceMappingURL=5pre-damage.controller.js.map