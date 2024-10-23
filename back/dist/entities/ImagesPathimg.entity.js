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
exports.ImagesPathimg = void 0;
const typeorm_1 = require("typeorm");
const ImagesGroup_entity_1 = require("./ImagesGroup.entity");
let ImagesPathimg = class ImagesPathimg {
};
exports.ImagesPathimg = ImagesPathimg;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ImagesPathimg.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ImagesPathimg.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ImagesPathimg.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ImagesGroup_entity_1.ImagesGroup, (group) => group.imagesPathimg),
    __metadata("design:type", ImagesGroup_entity_1.ImagesGroup)
], ImagesPathimg.prototype, "imagesGroup", void 0);
exports.ImagesPathimg = ImagesPathimg = __decorate([
    (0, typeorm_1.Entity)('t8_images_pathimg_entity')
], ImagesPathimg);
//# sourceMappingURL=ImagesPathimg.entity.js.map