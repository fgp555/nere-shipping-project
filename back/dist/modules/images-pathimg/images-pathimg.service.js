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
exports.ImagesPathimgService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ImagesPathimg_entity_1 = require("../../entities/ImagesPathimg.entity");
let ImagesPathimgService = class ImagesPathimgService {
    constructor(imagesPathimgRepository) {
        this.imagesPathimgRepository = imagesPathimgRepository;
    }
    async createImagesPathimg(data) {
        const imagesPathimg = this.imagesPathimgRepository.create(data);
        return this.imagesPathimgRepository.save(imagesPathimg);
    }
    async findAllImagesPathimgs() {
        return this.imagesPathimgRepository.find();
    }
    async findImagesPathimgById(id) {
        return this.imagesPathimgRepository.findOne({ where: { id } });
    }
    async updateImagesPathimg(id, data) {
        await this.imagesPathimgRepository.update(id, data);
        return this.imagesPathimgRepository.findOne({ where: { id } });
    }
    async deleteImagesPathimg(id) {
        await this.imagesPathimgRepository.delete(id);
    }
};
exports.ImagesPathimgService = ImagesPathimgService;
exports.ImagesPathimgService = ImagesPathimgService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ImagesPathimg_entity_1.ImagesPathimg)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ImagesPathimgService);
//# sourceMappingURL=images-pathimg.service.js.map