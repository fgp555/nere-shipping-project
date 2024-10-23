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
const UnstuffingContainer_entity_1 = require("./UnstuffingContainer.entity");
const PreExistingDamage_entity_1 = require("./PreExistingDamage.entity");
const Report_entity_1 = require("./Report.entity");
const RelevantTimes_entity_1 = require("./RelevantTimes.entity");
const SecuringSeals_entity_1 = require("./SecuringSeals.entity");
let DetailsShipment = class DetailsShipment {
};
exports.DetailsShipment = DetailsShipment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DetailsShipment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DetailsShipment.prototype, "vessel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DetailsShipment.prototype, "voyage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mbl_code', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DetailsShipment.prototype, "mblCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DetailsShipment.prototype, "pol", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DetailsShipment.prototype, "shipper", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DetailsShipment.prototype, "pod", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DetailsShipment.prototype, "consignee", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'qty_of_pkgs', type: 'int' }),
    __metadata("design:type", Number)
], DetailsShipment.prototype, "qtyOfPkgs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DetailsShipment.prototype, "goods", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gross_weight', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DetailsShipment.prototype, "grossWeight", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UnstuffingContainer_entity_1.UnstuffingContainer, (unstuffing) => unstuffing.detailsShipment),
    __metadata("design:type", Array)
], DetailsShipment.prototype, "unstuffingContainers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PreExistingDamage_entity_1.PreExistingDamage, (damage) => damage.detailsShipment),
    __metadata("design:type", Array)
], DetailsShipment.prototype, "preExistingDamages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Report_entity_1.Report, (report) => report.detailsShipment),
    __metadata("design:type", Array)
], DetailsShipment.prototype, "reports", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RelevantTimes_entity_1.RelevantTimes, (times) => times.detailsShipment),
    __metadata("design:type", Array)
], DetailsShipment.prototype, "relevantTimes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SecuringSeals_entity_1.SecuringSeals, (seals) => seals.detailsShipment),
    __metadata("design:type", Array)
], DetailsShipment.prototype, "securingSeals", void 0);
exports.DetailsShipment = DetailsShipment = __decorate([
    (0, typeorm_1.Entity)('t1_details_shipment_entity')
], DetailsShipment);
//# sourceMappingURL=DetailsShipment.entity.js.map