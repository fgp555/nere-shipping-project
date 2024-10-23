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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesGroupController = void 0;
const common_1 = require("@nestjs/common");
const images_group_service_1 = require("./images-group.service");
let ImagesGroupController = class ImagesGroupController {
    constructor(imagesGroupService) {
        this.imagesGroupService = imagesGroupService;
    }
    async create(createImagesGroupDto) {
        return this.imagesGroupService.createImagesGroup(createImagesGroupDto);
    }
    async findAll() {
        return this.imagesGroupService.findAllImagesGroups();
    }
    async findOne(id) {
        return this.imagesGroupService.findImagesGroupById(id);
    }
    async update(id, updateImagesGroupDto) {
        return this.imagesGroupService.updateImagesGroup(id, updateImagesGroupDto);
    }
    async remove(id) {
        return this.imagesGroupService.deleteImagesGroup(id);
    }
};
exports.ImagesGroupController = ImagesGroupController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImagesGroupController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImagesGroupController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImagesGroupController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ImagesGroupController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImagesGroupController.prototype, "remove", null);
exports.ImagesGroupController = ImagesGroupController = __decorate([
    (0, common_1.Controller)('images-groups'),
    __metadata("design:paramtypes", [images_group_service_1.ImagesGroupService])
], ImagesGroupController);
//# sourceMappingURL=images-group.controller.js.map