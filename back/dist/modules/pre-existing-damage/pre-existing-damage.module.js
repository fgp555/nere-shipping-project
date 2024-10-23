"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreExistingDamageModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pre_existing_damage_service_1 = require("./pre-existing-damage.service");
const pre_existing_damage_controller_1 = require("./pre-existing-damage.controller");
const PreExistingDamage_entity_1 = require("../../entities/PreExistingDamage.entity");
let PreExistingDamageModule = class PreExistingDamageModule {
};
exports.PreExistingDamageModule = PreExistingDamageModule;
exports.PreExistingDamageModule = PreExistingDamageModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PreExistingDamage_entity_1.PreExistingDamage])],
        providers: [pre_existing_damage_service_1.PreExistingDamageService],
        controllers: [pre_existing_damage_controller_1.PreExistingDamageController],
    })
], PreExistingDamageModule);
//# sourceMappingURL=pre-existing-damage.module.js.map