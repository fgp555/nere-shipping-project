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
exports.ImagesGroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ImagesGroup_entity_1 = require("../../entities/ImagesGroup.entity");
let ImagesGroupService = class ImagesGroupService {
    constructor(imagesGroupRepository) {
        this.imagesGroupRepository = imagesGroupRepository;
    }
    async createImagesGroup(data) {
        const imagesGroup = this.imagesGroupRepository.create(data);
        return this.imagesGroupRepository.save(imagesGroup);
    }
    async findAllImagesGroups() {
        return this.imagesGroupRepository.find();
    }
    async findImagesGroupById(id) {
        return this.imagesGroupRepository.findOne({ where: { id } });
    }
    async updateImagesGroup(id, data) {
        await this.imagesGroupRepository.update(id, data);
        return this.imagesGroupRepository.findOne({ where: { id } });
    }
    async deleteImagesGroup(id) {
        await this.imagesGroupRepository.delete(id);
    }
};
exports.ImagesGroupService = ImagesGroupService;
exports.ImagesGroupService = ImagesGroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ImagesGroup_entity_1.ImagesGroup)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ImagesGroupService);
//# sourceMappingURL=images-group.service.js.map