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
exports.DetailsShipment = void 0;
const typeorm_1 = require("typeorm");
const report_entity_1 = require("./report.entity");
let DetailsShipment = class DetailsShipment {
};
exports.DetailsShipment = DetailsShipment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DetailsShipment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetailsShipment.prototype, "vessel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetailsShipment.prototype, "voyage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetailsShipment.prototype, "mbl_code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetailsShipment.prototype, "pol", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetailsShipment.prototype, "shipper", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetailsShipment.prototype, "pod", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetailsShipment.prototype, "consignee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], DetailsShipment.prototype, "qty_of_pkgs", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetailsShipment.prototype, "goods", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetailsShipment.prototype, "gross_weight", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => report_entity_1.ReportEntity, (report) => report.t1_details_shipment, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", report_entity_1.ReportEntity)
], DetailsShipment.prototype, "report", void 0);
exports.DetailsShipment = DetailsShipment = __decorate([
    (0, typeorm_1.Entity)()
], DetailsShipment);
//# sourceMappingURL=details-shipment.entity.js.map