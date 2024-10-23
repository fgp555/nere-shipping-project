"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesGroupModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const images_group_service_1 = require("./images-group.service");
const images_group_controller_1 = require("./images-group.controller");
const ImagesGroup_entity_1 = require("../../entities/ImagesGroup.entity");
let ImagesGroupModule = class ImagesGroupModule {
};
exports.ImagesGroupModule = ImagesGroupModule;
exports.ImagesGroupModule = ImagesGroupModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ImagesGroup_entity_1.ImagesGroup])],
        providers: [images_group_service_1.ImagesGroupService],
        controllers: [images_group_controller_1.ImagesGroupController],
    })
], ImagesGroupModule);
//# sourceMappingURL=images-group.module.js.map