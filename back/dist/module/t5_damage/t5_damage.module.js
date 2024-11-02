"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.T5DamageModule = void 0;
const common_1 = require("@nestjs/common");
const t5_damage_service_1 = require("./t5_damage.service");
const t5_damage_controller_1 = require("./t5_damage.controller");
const typeorm_1 = require("@nestjs/typeorm");
const t5_damage_entity_1 = require("./entities/t5_damage.entity");
const report_entity_1 = require("../report/entities/report.entity");
let T5DamageModule = class T5DamageModule {
};
exports.T5DamageModule = T5DamageModule;
exports.T5DamageModule = T5DamageModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([t5_damage_entity_1.T5DamageEntity, report_entity_1.ReportEntity])],
        controllers: [t5_damage_controller_1.T5DamageController],
        providers: [t5_damage_service_1.T5DamageService],
    })
], T5DamageModule);
//# sourceMappingURL=t5_damage.module.js.map