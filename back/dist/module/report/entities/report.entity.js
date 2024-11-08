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
exports.ReportEntity = void 0;
const t4_unstuffing_entity_1 = require("../../t4_unstuffing/entities/t4_unstuffing.entity");
const t5_damage_entity_1 = require("../../t5_damage/entities/t5_damage.entity");
const typeorm_1 = require("typeorm");
const header_entity_1 = require("./header.entity");
const details_shipment_entity_1 = require("./details-shipment.entity");
const relevant_times_entity_1 = require("./relevant-times.entity");
const securing_seals_entity_1 = require("./securing-seals.entity");
const footer_entity_1 = require("./footer.entity");
let ReportEntity = class ReportEntity {
};
exports.ReportEntity = ReportEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ReportEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], ReportEntity.prototype, "mbl_code", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => header_entity_1.HeaderEntity, (header) => header.report, {
        cascade: true,
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", header_entity_1.HeaderEntity)
], ReportEntity.prototype, "t0_header", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => details_shipment_entity_1.DetailsShipment, (details) => details.report, {
        cascade: true,
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", details_shipment_entity_1.DetailsShipment)
], ReportEntity.prototype, "t1_details_shipment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => relevant_times_entity_1.RelevantTimes, (times) => times.report, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], ReportEntity.prototype, "T2_relevant_times", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => securing_seals_entity_1.SecuringSeals, (seals) => seals.report, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], ReportEntity.prototype, "t3_securing_seals", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => t4_unstuffing_entity_1.T4UnstuffingEntity, (t5_damage) => t5_damage.report_mbl_code, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], ReportEntity.prototype, "t4_unstuffing", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => t5_damage_entity_1.T5DamageEntity, (t5_damage) => t5_damage.report_mbl_code, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], ReportEntity.prototype, "t5_damage", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => footer_entity_1.FooterEntity, (footer) => footer.report, {
        cascade: true,
        eager: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", footer_entity_1.FooterEntity)
], ReportEntity.prototype, "t6_footer", void 0);
exports.ReportEntity = ReportEntity = __decorate([
    (0, typeorm_1.Entity)('reports')
], ReportEntity);
//# sourceMappingURL=report.entity.js.map