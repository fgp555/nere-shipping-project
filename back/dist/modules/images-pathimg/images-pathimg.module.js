"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesPathimgModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const images_pathimg_service_1 = require("./images-pathimg.service");
const images_pathimg_controller_1 = require("./images-pathimg.controller");
const ImagesPathimg_entity_1 = require("../../entities/ImagesPathimg.entity");
let ImagesPathimgModule = class ImagesPathimgModule {
};
exports.ImagesPathimgModule = ImagesPathimgModule;
exports.ImagesPathimgModule = ImagesPathimgModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ImagesPathimg_entity_1.ImagesPathimg])],
        providers: [images_pathimg_service_1.ImagesPathimgService],
        controllers: [images_pathimg_controller_1.ImagesPathimgController],
    })
], ImagesPathimgModule);
//# sourceMappingURL=images-pathimg.module.js.map