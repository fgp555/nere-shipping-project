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
exports.Report = void 0;
const typeorm_1 = require("typeorm");
const header_entity_1 = require("./header.entity");
const details_shipment_entity_1 = require("./details-shipment.entity");
const relevant_times_entity_1 = require("./relevant-times.entity");
const securing_seals_entity_1 = require("./securing-seals.entity");
const unstuffing_container_entity_1 = require("./unstuffing-container.entity");
const pre_existing_damage_entity_1 = require("./pre-existing-damage.entity");
const weather_entity_1 = require("./weather.entity");
const footer_entity_1 = require("./footer.entity");
let Report = class Report {
};
exports.Report = Report;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Report.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => header_entity_1.Header, (header) => header.report, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", header_entity_1.Header)
], Report.prototype, "t0_header", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => details_shipment_entity_1.DetailsShipment, (details) => details.report, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", details_shipment_entity_1.DetailsShipment)
], Report.prototype, "t1_details_shipment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => relevant_times_entity_1.RelevantTimes, (times) => times.report, { cascade: true }),
    __metadata("design:type", Array)
], Report.prototype, "T2_relevant_times", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => securing_seals_entity_1.SecuringSeals, (seals) => seals.report, { cascade: true }),
    __metadata("design:type", Array)
], Report.prototype, "t3_securing_seals", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => unstuffing_container_entity_1.UnstuffingContainer, (unstuffing) => unstuffing.report, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", unstuffing_container_entity_1.UnstuffingContainer)
], Report.prototype, "t4_unstuffing_container", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => pre_existing_damage_entity_1.PreExistingDamage, (damage) => damage.report, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", pre_existing_damage_entity_1.PreExistingDamage)
], Report.prototype, "t5_pre_existing_damage", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => weather_entity_1.Weather, (weather) => weather.report, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", weather_entity_1.Weather)
], Report.prototype, "t6_the_weather", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => footer_entity_1.Footer, (footer) => footer.report, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", footer_entity_1.Footer)
], Report.prototype, "t7_footer", void 0);
exports.Report = Report = __decorate([
    (0, typeorm_1.Entity)()
], Report);
//# sourceMappingURL=report.entity.js.map