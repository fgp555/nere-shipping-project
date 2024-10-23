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
exports.ImagesGroup = void 0;
const typeorm_1 = require("typeorm");
const ImagesPathimg_entity_1 = require("./ImagesPathimg.entity");
let ImagesGroup = class ImagesGroup {
};
exports.ImagesGroup = ImagesGroup;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ImagesGroup.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ImagesGroup.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], ImagesGroup.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ImagesPathimg_entity_1.ImagesPathimg, (pathimg) => pathimg.imagesGroup, {
        eager: true,
    }),
    __metadata("design:type", Array)
], ImagesGroup.prototype, "imagesPathimg", void 0);
exports.ImagesGroup = ImagesGroup = __decorate([
    (0, typeorm_1.Entity)('t8_images_group_entity')
], ImagesGroup);
//# sourceMappingURL=ImagesGroup.entity.js.map