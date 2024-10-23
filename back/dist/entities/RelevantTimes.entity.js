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
exports.RelevantTimes = void 0;
const typeorm_1 = require("typeorm");
const Containers_entity_1 = require("./Containers.entity");
const DetailsShipment_entity_1 = require("./DetailsShipment.entity");
let RelevantTimes = class RelevantTimes {
};
exports.RelevantTimes = RelevantTimes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RelevantTimes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], RelevantTimes.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Containers_entity_1.Containers, (container) => container.relevantTimes, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'container_id' }),
    __metadata("design:type", Containers_entity_1.Containers)
], RelevantTimes.prototype, "container", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'qty_of_pkgs', type: 'int' }),
    __metadata("design:type", Number)
], RelevantTimes.prototype, "qtyOfPkgs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], RelevantTimes.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], RelevantTimes.prototype, "complete", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'time_used_to_survey', type: 'time' }),
    __metadata("design:type", String)
], RelevantTimes.prototype, "timeUsedToSurvey", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DetailsShipment_entity_1.DetailsShipment, (details) => details.relevantTimes, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'details_shipment_id' }),
    __metadata("design:type", DetailsShipment_entity_1.DetailsShipment)
], RelevantTimes.prototype, "detailsShipment", void 0);
exports.RelevantTimes = RelevantTimes = __decorate([
    (0, typeorm_1.Entity)('t2_relevant_times_entity')
], RelevantTimes);
//# sourceMappingURL=RelevantTimes.entity.js.map