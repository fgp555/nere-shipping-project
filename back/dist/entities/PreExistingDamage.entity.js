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
exports.PreExistingDamage = void 0;
const typeorm_1 = require("typeorm");
const Description_entity_1 = require("./Description.entity");
const DetailsShipment_entity_1 = require("./DetailsShipment.entity");
let PreExistingDamage = class PreExistingDamage {
};
exports.PreExistingDamage = PreExistingDamage;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PreExistingDamage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'b_l_no', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PreExistingDamage.prototype, "blNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PreExistingDamage.prototype, "consignee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PreExistingDamage.prototype, "marks", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'qty_of_pkgs', type: 'int' }),
    __metadata("design:type", Number)
], PreExistingDamage.prototype, "qtyOfPkgs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PreExistingDamage.prototype, "goods", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], PreExistingDamage.prototype, "remarks", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Description_entity_1.Description, (description) => description.preExistingDamages, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'damage_description_id' }),
    __metadata("design:type", Description_entity_1.Description)
], PreExistingDamage.prototype, "damageDescription", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DetailsShipment_entity_1.DetailsShipment, (details) => details.preExistingDamages, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'details_shipment_id' }),
    __metadata("design:type", DetailsShipment_entity_1.DetailsShipment)
], PreExistingDamage.prototype, "detailsShipment", void 0);
exports.PreExistingDamage = PreExistingDamage = __decorate([
    (0, typeorm_1.Entity)('t5_pre_existing_damage_entity')
], PreExistingDamage);
//# sourceMappingURL=PreExistingDamage.entity.js.map