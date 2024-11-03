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
exports.HeaderEntity = void 0;
const typeorm_1 = require("typeorm");
const report_entity_1 = require("./report.entity");
let HeaderEntity = class HeaderEntity {
};
exports.HeaderEntity = HeaderEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], HeaderEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "header_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "header_address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "header_mobile", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "header_email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "report_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "cliente_senores", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "cliente_empresa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "cliente_deposito", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "cliente_postal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "operador_area", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "operador_responsables1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "operador_responsables2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "report_mv", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "containers_reporte", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "containers_leyenda", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    __metadata("design:type", Array)
], HeaderEntity.prototype, "containers_code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "containers_descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderEntity.prototype, "containers_destino", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], HeaderEntity.prototype, "report_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], HeaderEntity.prototype, "report_note", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => report_entity_1.ReportEntity, (report) => report.t0_header),
    __metadata("design:type", report_entity_1.ReportEntity)
], HeaderEntity.prototype, "report", void 0);
exports.HeaderEntity = HeaderEntity = __decorate([
    (0, typeorm_1.Entity)()
], HeaderEntity);
//# sourceMappingURL=header.entity.js.map