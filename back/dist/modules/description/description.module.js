"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const description_service_1 = require("./description.service");
const description_controller_1 = require("./description.controller");
const Description_entity_1 = require("../../entities/Description.entity");
let DescriptionModule = class DescriptionModule {
};
exports.DescriptionModule = DescriptionModule;
exports.DescriptionModule = DescriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Description_entity_1.Description])],
        providers: [description_service_1.DescriptionService],
        controllers: [description_controller_1.DescriptionController],
    })
], DescriptionModule);
//# sourceMappingURL=description.module.js.map