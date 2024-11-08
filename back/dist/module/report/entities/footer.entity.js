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
exports.FooterEntity = void 0;
const typeorm_1 = require("typeorm");
const report_entity_1 = require("./report.entity");
let FooterEntity = class FooterEntity {
};
exports.FooterEntity = FooterEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FooterEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FooterEntity.prototype, "weather_status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FooterEntity.prototype, "legend", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FooterEntity.prototype, "who_signs", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FooterEntity.prototype, "cargo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => report_entity_1.ReportEntity, (report) => report.t6_footer, {}),
    __metadata("design:type", report_entity_1.ReportEntity)
], FooterEntity.prototype, "report", void 0);
exports.FooterEntity = FooterEntity = __decorate([
    (0, typeorm_1.Entity)()
], FooterEntity);
//# sourceMappingURL=footer.entity.js.map