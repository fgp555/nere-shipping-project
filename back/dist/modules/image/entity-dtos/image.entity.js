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
exports.ImageEntity = void 0;
const _5pre_damage_entity_1 = require("../../5pre-damage/entity-dtos/5pre-damage.entity");
const typeorm_1 = require("typeorm");
let ImageEntity = class ImageEntity {
};
exports.ImageEntity = ImageEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ImageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImageEntity.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _5pre_damage_entity_1.PreDamageEntity, (finalReport) => finalReport.images, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", _5pre_damage_entity_1.PreDamageEntity)
], ImageEntity.prototype, "finalReport", void 0);
exports.ImageEntity = ImageEntity = __decorate([
    (0, typeorm_1.Entity)()
], ImageEntity);
//# sourceMappingURL=image.entity.js.map