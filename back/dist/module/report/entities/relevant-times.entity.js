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
const report_entity_1 = require("./report.entity");
let RelevantTimes = class RelevantTimes {
};
exports.RelevantTimes = RelevantTimes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RelevantTimes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RelevantTimes.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RelevantTimes.prototype, "container_code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RelevantTimes.prototype, "qty_of_pkgs", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RelevantTimes.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RelevantTimes.prototype, "complete", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RelevantTimes.prototype, "time_used_to_survey", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => report_entity_1.ReportEntity, (report) => report.T2_relevant_times, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", report_entity_1.ReportEntity)
], RelevantTimes.prototype, "report", void 0);
exports.RelevantTimes = RelevantTimes = __decorate([
    (0, typeorm_1.Entity)()
], RelevantTimes);
//# sourceMappingURL=relevant-times.entity.js.map