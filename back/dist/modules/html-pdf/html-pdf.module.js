"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlPdfModule = void 0;
const common_1 = require("@nestjs/common");
const html_pdf_controller_1 = require("./html-pdf.controller");
const html_pdf_service_1 = require("./html-pdf.service");
const image_service_1 = require("../image/image.service");
const typeorm_1 = require("@nestjs/typeorm");
const image_entity_1 = require("../image/entity-dtos/image.entity");
const _5pre_damage_service_1 = require("../5pre-damage/5pre-damage.service");
const _5pre_damage_entity_1 = require("../5pre-damage/entity-dtos/5pre-damage.entity");
let HtmlPdfModule = class HtmlPdfModule {
};
exports.HtmlPdfModule = HtmlPdfModule;
exports.HtmlPdfModule = HtmlPdfModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([image_entity_1.ImageEntity, _5pre_damage_entity_1.PreDamageEntity])],
        controllers: [html_pdf_controller_1.HtmlPdfController],
        providers: [html_pdf_service_1.HtmlPdfService, _5pre_damage_service_1.PreDamageService, image_service_1.ImageService],
        exports: [],
    })
], HtmlPdfModule);
//# sourceMappingURL=html-pdf.module.js.map