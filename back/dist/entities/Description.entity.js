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
exports.Description = void 0;
const typeorm_1 = require("typeorm");
const DescriptionsGroup_entity_1 = require("./DescriptionsGroup.entity");
const UnstuffingContainer_entity_1 = require("./UnstuffingContainer.entity");
const PreExistingDamage_entity_1 = require("./PreExistingDamage.entity");
let Description = class Description {
};
exports.Description = Description;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Description.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Description.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DescriptionsGroup_entity_1.DescriptionsGroup, (group) => group.description),
    __metadata("design:type", Array)
], Description.prototype, "descriptionsGroups", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UnstuffingContainer_entity_1.UnstuffingContainer, (unstuffing) => unstuffing.description),
    __metadata("design:type", Array)
], Description.prototype, "unstuffingContainers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PreExistingDamage_entity_1.PreExistingDamage, (damage) => damage.damageDescription),
    __metadata("design:type", Array)
], Description.prototype, "preExistingDamages", void 0);
exports.Description = Description = __decorate([
    (0, typeorm_1.Entity)('t9_description_entity')
], Description);
//# sourceMappingURL=Description.entity.js.map