"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.T4UnstuffingModule = void 0;
const common_1 = require("@nestjs/common");
const t4_unstuffing_service_1 = require("./t4_unstuffing.service");
const t4_unstuffing_controller_1 = require("./t4_unstuffing.controller");
const typeorm_1 = require("@nestjs/typeorm");
const t4_unstuffing_entity_1 = require("./entities/t4_unstuffing.entity");
const image_group_entity_1 = require("../image/image-group.entity");
let T4UnstuffingModule = class T4UnstuffingModule {
};
exports.T4UnstuffingModule = T4UnstuffingModule;
exports.T4UnstuffingModule = T4UnstuffingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([t4_unstuffing_entity_1.T4UnstuffingEntity, image_group_entity_1.ImageGroupEntity])],
        controllers: [t4_unstuffing_controller_1.T4UnstuffingController],
        providers: [t4_unstuffing_service_1.T4UnstuffingService],
    })
], T4UnstuffingModule);
//# sourceMappingURL=t4_unstuffing.module.js.map