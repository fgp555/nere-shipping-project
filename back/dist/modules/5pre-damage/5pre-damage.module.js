"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreDamageModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const html_pdf_service_1 = require("../html-pdf/html-pdf.service");
const image_entity_1 = require("../image/entity-dtos/image.entity");
const _5pre_damage_entity_1 = require("./entity-dtos/5pre-damage.entity");
const _5pre_damage_controller_1 = require("./5pre-damage.controller");
const _5pre_damage_service_1 = require("./5pre-damage.service");
let PreDamageModule = class PreDamageModule {
};
exports.PreDamageModule = PreDamageModule;
exports.PreDamageModule = PreDamageModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([_5pre_damage_entity_1.PreDamageEntity, image_entity_1.ImageEntity])],
        controllers: [_5pre_damage_controller_1.PreDamageController],
        providers: [_5pre_damage_service_1.PreDamageService, html_pdf_service_1.HtmlPdfService],
        exports: [],
    })
], PreDamageModule);
//# sourceMappingURL=5pre-damage.module.js.map