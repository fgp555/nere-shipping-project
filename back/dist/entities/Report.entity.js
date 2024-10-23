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
const Containers_entity_1 = require("./Containers.entity");
const DetailsShipment_entity_1 = require("./DetailsShipment.entity");
let Report = class Report {
};
exports.Report = Report;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Report.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'header_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "headerName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'header_address', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "headerAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'header_mobile', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "headerMobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'header_email', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "headerEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'report_date', type: 'date' }),
    __metadata("design:type", Date)
], Report.prototype, "reportDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cliente_senores', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "clienteSenores", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cliente_empresa', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "clienteEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cliente_deposito', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "clienteDeposito", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cliente_postal', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "clientePostal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'operador_area', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "operadorArea", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'operador_responsables1', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "operadorResponsables1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'operador_responsables2', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "operadorResponsables2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'report_mv', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "reportMv", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'containers_reporte', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "containersReporte", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'containers_leyenda', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "containersLeyenda", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'containers_descripcion', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "containersDescripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'containers_destino', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Report.prototype, "containersDestino", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'report_description', type: 'text' }),
    __metadata("design:type", String)
], Report.prototype, "reportDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'report_note', type: 'text' }),
    __metadata("design:type", String)
], Report.prototype, "reportNote", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Containers_entity_1.Container, (container) => container.reports, {
        eager: true,
    }),
    __metadata("design:type", Array)
], Report.prototype, "containers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DetailsShipment_entity_1.DetailsShipment, (details) => details.reports, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'details_shipment_id' }),
    __metadata("design:type", DetailsShipment_entity_1.DetailsShipment)
], Report.prototype, "detailsShipment", void 0);
exports.Report = Report = __decorate([
    (0, typeorm_1.Entity)('t0_report_entity')
], Report);
//# sourceMappingURL=Report.entity.js.map