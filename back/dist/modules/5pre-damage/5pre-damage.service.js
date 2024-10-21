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
exports.PreDamageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const image_entity_1 = require("../image/entity-dtos/image.entity");
const _5pre_damage_entity_1 = require("./entity-dtos/5pre-damage.entity");
let PreDamageService = class PreDamageService {
    constructor(finalReportRepository, imageRepository) {
        this.finalReportRepository = finalReportRepository;
        this.imageRepository = imageRepository;
    }
    findAll() {
        return this.finalReportRepository.find({ relations: ['images'] });
    }
    findByMBL(mbl) {
        return this.finalReportRepository.findOne({
            where: { mbl },
            relations: ['images'],
        });
    }
    findAllByMBL(mbl) {
        return this.finalReportRepository.find({
            where: { mbl },
            relations: ['images'],
        });
    }
    findOne(id) {
        return this.finalReportRepository.findOne({
            where: { id },
            relations: ['images'],
        });
    }
    async create(finalReport, images) {
        const savedImages = await this.saveImages(images);
        finalReport.images = savedImages;
        return this.finalReportRepository.save(finalReport);
    }
    async update(id, finalReport, images) {
        console.log('id', id, 'finalReport', finalReport, 'images', images);
        const existingReport = await this.finalReportRepository.findOne({
            where: { id },
            relations: ['images'],
        });
        if (!existingReport) {
            throw new Error('FinalReport not found');
        }
        if (images && images.length > 0) {
            await this.imageRepository.delete({ finalReport: existingReport });
            const savedImages = await this.saveImages(images);
            finalReport.images = savedImages;
        }
        else {
            finalReport.images = existingReport.images;
        }
        await this.finalReportRepository.save({
            ...existingReport,
            ...finalReport,
        });
        return this.findOne(id);
    }
    async remove(id) {
        await this.finalReportRepository.delete(id);
    }
    async saveImages(files) {
        const imageEntities = files.map((file) => {
            const image = new image_entity_1.ImageEntity();
            image.path = file.path;
            return image;
        });
        return this.imageRepository.save(imageEntities);
    }
};
exports.PreDamageService = PreDamageService;
exports.PreDamageService = PreDamageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(_5pre_damage_entity_1.PreDamageEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(image_entity_1.ImageEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PreDamageService);
//# sourceMappingURL=5pre-damage.service.js.map