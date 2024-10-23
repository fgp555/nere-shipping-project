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
exports.DescriptionsGroup = void 0;
const typeorm_1 = require("typeorm");
const Description_entity_1 = require("./Description.entity");
const UnstuffingContainer_entity_1 = require("./UnstuffingContainer.entity");
const PreExistingDamage_entity_1 = require("./PreExistingDamage.entity");
let DescriptionsGroup = class DescriptionsGroup {
};
exports.DescriptionsGroup = DescriptionsGroup;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DescriptionsGroup.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], DescriptionsGroup.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Description_entity_1.Description, (description) => description.descriptionsGroups, {
        eager: true,
    }),
    __metadata("design:type", Array)
], DescriptionsGroup.prototype, "descriptions", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => UnstuffingContainer_entity_1.UnstuffingContainer, (unstuffing) => unstuffing.descriptionsGroup),
    __metadata("design:type", Array)
], DescriptionsGroup.prototype, "unstuffingContainers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PreExistingDamage_entity_1.PreExistingDamage, (damage) => damage.descriptionsGroup),
    __metadata("design:type", PreExistingDamage_entity_1.PreExistingDamage)
], DescriptionsGroup.prototype, "preExistingDamages", void 0);
exports.DescriptionsGroup = DescriptionsGroup = __decorate([
    (0, typeorm_1.Entity)('t10_descriptions_group_entity')
], DescriptionsGroup);
//# sourceMappingURL=DescriptionsGroup.entity.js.map