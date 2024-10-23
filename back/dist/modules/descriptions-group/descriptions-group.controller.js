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
exports.DescriptionsGroupController = void 0;
const common_1 = require("@nestjs/common");
const descriptions_group_service_1 = require("./descriptions-group.service");
let DescriptionsGroupController = class DescriptionsGroupController {
    constructor(descriptionsGroupService) {
        this.descriptionsGroupService = descriptionsGroupService;
    }
    async create(createDescriptionsGroupDto) {
        return this.descriptionsGroupService.createDescriptionsGroup(createDescriptionsGroupDto);
    }
    async findAll() {
        return this.descriptionsGroupService.findAllDescriptionsGroups();
    }
    async findOne(id) {
        return this.descriptionsGroupService.findDescriptionsGroupById(id);
    }
    async update(id, updateDescriptionsGroupDto) {
        return this.descriptionsGroupService.updateDescriptionsGroup(id, updateDescriptionsGroupDto);
    }
    async remove(id) {
        return this.descriptionsGroupService.deleteDescriptionsGroup(id);
    }
};
exports.DescriptionsGroupController = DescriptionsGroupController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DescriptionsGroupController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DescriptionsGroupController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DescriptionsGroupController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DescriptionsGroupController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DescriptionsGroupController.prototype, "remove", null);
exports.DescriptionsGroupController = DescriptionsGroupController = __decorate([
    (0, common_1.Controller)('descriptions-groups'),
    __metadata("design:paramtypes", [descriptions_group_service_1.DescriptionsGroupService])
], DescriptionsGroupController);
//# sourceMappingURL=descriptions-group.controller.js.map