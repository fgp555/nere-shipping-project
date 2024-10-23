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
exports.Container = void 0;
const typeorm_1 = require("typeorm");
const Report_entity_1 = require("./Report.entity");
const RelevantTimes_entity_1 = require("./RelevantTimes.entity");
const SecuringSeals_entity_1 = require("./SecuringSeals.entity");
let Container = class Container {
};
exports.Container = Container;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Container.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'container_code', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Container.prototype, "containerCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Container.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Report_entity_1.Report, (report) => report.containers),
    __metadata("design:type", Report_entity_1.Report)
], Container.prototype, "reports", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RelevantTimes_entity_1.RelevantTimes, (times) => times.containers),
    __metadata("design:type", Array)
], Container.prototype, "relevantTimes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => SecuringSeals_entity_1.SecuringSeals, (seals) => seals.containers),
    __metadata("design:type", SecuringSeals_entity_1.SecuringSeals)
], Container.prototype, "securingSeals", void 0);
exports.Container = Container = __decorate([
    (0, typeorm_1.Entity)('t6_containers_entity')
], Container);
//# sourceMappingURL=Containers.entity.js.map