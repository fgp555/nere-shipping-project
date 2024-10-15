"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinalReportModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const final_report_controller_1 = require("./final-report.controller");
const final_report_service_1 = require("./final-report.service");
const html_pdf_service_1 = require("../html-pdf/html-pdf.service");
const final_report_entity_1 = require("./entity-dtos/final-report.entity");
const image_entity_1 = require("../image/entity-dtos/image.entity");
let FinalReportModule = class FinalReportModule {
};
exports.FinalReportModule = FinalReportModule;
exports.FinalReportModule = FinalReportModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([final_report_entity_1.FinalReportEntity, image_entity_1.ImageEntity])],
        controllers: [final_report_controller_1.FinalReportController],
        providers: [final_report_service_1.FinalReportService, html_pdf_service_1.HtmlPdfService],
        exports: [],
    })
], FinalReportModule);
//# sourceMappingURL=final-report.module.js.map