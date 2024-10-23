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
exports.SecuringSeals = void 0;
const typeorm_1 = require("typeorm");
const Containers_entity_1 = require("./Containers.entity");
const DetailsShipment_entity_1 = require("./DetailsShipment.entity");
let SecuringSeals = class SecuringSeals {
};
exports.SecuringSeals = SecuringSeals;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SecuringSeals.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Containers_entity_1.Container, (container) => container.securingSeals, { eager: true }),
    __metadata("design:type", Array)
], SecuringSeals.prototype, "containers", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SecuringSeals.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'wwas_safety_seals', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SecuringSeals.prototype, "wwasSafetySeals", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'argentinean_customs_seal', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SecuringSeals.prototype, "argentineanCustomsSeal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SecuringSeals.prototype, "others", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DetailsShipment_entity_1.DetailsShipment, (details) => details.securingSeals, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'details_shipment_id' }),
    __metadata("design:type", DetailsShipment_entity_1.DetailsShipment)
], SecuringSeals.prototype, "detailsShipment", void 0);
exports.SecuringSeals = SecuringSeals = __decorate([
    (0, typeorm_1.Entity)('t3_securing_seals_entity')
], SecuringSeals);
//# sourceMappingURL=SecuringSeals.entity.js.map