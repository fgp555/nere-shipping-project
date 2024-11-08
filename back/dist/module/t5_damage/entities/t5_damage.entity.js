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
Object.defineProperty(exports, "__esModule", { value: true });
exports.T5DamageEntity = void 0;
const report_entity_1 = require("../../report/entities/report.entity");
const typeorm_1 = require("typeorm");
const t5_image_group_entity_1 = require("./t5_image-group.entity");
let T5DamageEntity = class T5DamageEntity {
};
exports.T5DamageEntity = T5DamageEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], T5DamageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Array)
], T5DamageEntity.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], T5DamageEntity.prototype, "foot_note", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => t5_image_group_entity_1.T5ImageGroupEntity, (imageGroup) => imageGroup.damage, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], T5DamageEntity.prototype, "images_groups", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => report_entity_1.ReportEntity, (report) => report.t5_damage, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", report_entity_1.ReportEntity)
], T5DamageEntity.prototype, "report_mbl_code", void 0);
exports.T5DamageEntity = T5DamageEntity = __decorate([
    (0, typeorm_1.Entity)('T5Damage')
], T5DamageEntity);
//# sourceMappingURL=t5_damage.entity.js.map