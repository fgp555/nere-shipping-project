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
exports.PreDamageEntity = void 0;
const image_entity_1 = require("../../image/entity-dtos/image.entity");
const typeorm_1 = require("typeorm");
let PreDamageEntity = class PreDamageEntity {
};
exports.PreDamageEntity = PreDamageEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PreDamageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'b-l-no' }),
    __metadata("design:type", String)
], PreDamageEntity.prototype, "bLNo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PreDamageEntity.prototype, "consignee", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'marks' }),
    __metadata("design:type", String)
], PreDamageEntity.prototype, "marks", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'qty-pkgs' }),
    __metadata("design:type", Number)
], PreDamageEntity.prototype, "qtyPkgs", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PreDamageEntity.prototype, "remarks", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PreDamageEntity.prototype, "pallet", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'legend' }),
    __metadata("design:type", String)
], PreDamageEntity.prototype, "legend", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => image_entity_1.ImageEntity, (image) => image.finalReport),
    __metadata("design:type", Array)
], PreDamageEntity.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PreDamageEntity.prototype, "mbl", void 0);
exports.PreDamageEntity = PreDamageEntity = __decorate([
    (0, typeorm_1.Entity)()
], PreDamageEntity);
//# sourceMappingURL=5pre-damage.entity.js.map