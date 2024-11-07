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
exports.T5ImageGroupEntity = void 0;
const typeorm_1 = require("typeorm");
const t5_damage_entity_1 = require("./t5_damage.entity");
let T5ImageGroupEntity = class T5ImageGroupEntity {
};
exports.T5ImageGroupEntity = T5ImageGroupEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], T5ImageGroupEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], T5ImageGroupEntity.prototype, "group_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], T5ImageGroupEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], T5ImageGroupEntity.prototype, "b_l_no", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], T5ImageGroupEntity.prototype, "consignee", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], T5ImageGroupEntity.prototype, "marks", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], T5ImageGroupEntity.prototype, "qty_of_pkgs", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], T5ImageGroupEntity.prototype, "goods", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], T5ImageGroupEntity.prototype, "remarks", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Array)
], T5ImageGroupEntity.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Array)
], T5ImageGroupEntity.prototype, "images_notes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => t5_damage_entity_1.T5DamageEntity, (damage) => damage.images_groups, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", t5_damage_entity_1.T5DamageEntity)
], T5ImageGroupEntity.prototype, "damage", void 0);
exports.T5ImageGroupEntity = T5ImageGroupEntity = __decorate([
    (0, typeorm_1.Entity)('t5_image_groups')
], T5ImageGroupEntity);
//# sourceMappingURL=t5_image-group.entity.js.map