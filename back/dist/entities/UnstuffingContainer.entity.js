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
exports.UnstuffingContainer = void 0;
const typeorm_1 = require("typeorm");
const Description_entity_1 = require("./Description.entity");
const DetailsShipment_entity_1 = require("./DetailsShipment.entity");
let UnstuffingContainer = class UnstuffingContainer {
};
exports.UnstuffingContainer = UnstuffingContainer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UnstuffingContainer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Description_entity_1.Description, (description) => description.unstuffingContainers, { eager: true, onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], UnstuffingContainer.prototype, "descriptions", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DetailsShipment_entity_1.DetailsShipment, (details) => details.unstuffingContainers, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'details_shipment_id' }),
    __metadata("design:type", DetailsShipment_entity_1.DetailsShipment)
], UnstuffingContainer.prototype, "detailsShipment", void 0);
exports.UnstuffingContainer = UnstuffingContainer = __decorate([
    (0, typeorm_1.Entity)('t4_unstuffing_container_entity')
], UnstuffingContainer);
//# sourceMappingURL=UnstuffingContainer.entity.js.map