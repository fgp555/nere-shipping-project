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
exports.ImageGroupEntity = void 0;
const typeorm_1 = require("typeorm");
const t4_unstuffing_entity_1 = require("../t4_unstuffing/entities/t4_unstuffing.entity");
let ImageGroupEntity = class ImageGroupEntity {
};
exports.ImageGroupEntity = ImageGroupEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ImageGroupEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImageGroupEntity.prototype, "group_name", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Array)
], ImageGroupEntity.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Array)
], ImageGroupEntity.prototype, "images_notes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => t4_unstuffing_entity_1.T4UnstuffingEntity, (report) => report.images_groups, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", t4_unstuffing_entity_1.T4UnstuffingEntity)
], ImageGroupEntity.prototype, "unstuffing", void 0);
exports.ImageGroupEntity = ImageGroupEntity = __decorate([
    (0, typeorm_1.Entity)('image_groups')
], ImageGroupEntity);
//# sourceMappingURL=image-group.entity.js.map