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
const report_entity_1 = require("./report.entity");
let UnstuffingContainer = class UnstuffingContainer {
};
exports.UnstuffingContainer = UnstuffingContainer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UnstuffingContainer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], UnstuffingContainer.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { nullable: true }),
    __metadata("design:type", Array)
], UnstuffingContainer.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UnstuffingContainer.prototype, "foot_note", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => report_entity_1.Report, (report) => report.t4_unstuffing_container),
    __metadata("design:type", report_entity_1.Report)
], UnstuffingContainer.prototype, "report", void 0);
exports.UnstuffingContainer = UnstuffingContainer = __decorate([
    (0, typeorm_1.Entity)()
], UnstuffingContainer);
//# sourceMappingURL=unstuffing-container.entity.js.map