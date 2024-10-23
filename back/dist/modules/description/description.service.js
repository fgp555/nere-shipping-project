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
exports.DescriptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Description_entity_1 = require("../../entities/Description.entity");
let DescriptionService = class DescriptionService {
    constructor(descriptionRepository) {
        this.descriptionRepository = descriptionRepository;
    }
    async createDescription(data) {
        const description = this.descriptionRepository.create(data);
        return this.descriptionRepository.save(description);
    }
    async findAllDescriptions() {
        return this.descriptionRepository.find();
    }
    async findDescriptionById(id) {
        return this.descriptionRepository.findOne({ where: { id } });
    }
    async updateDescription(id, data) {
        await this.descriptionRepository.update(id, data);
        return this.descriptionRepository.findOne({ where: { id } });
    }
    async deleteDescription(id) {
        await this.descriptionRepository.delete(id);
    }
};
exports.DescriptionService = DescriptionService;
exports.DescriptionService = DescriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Description_entity_1.Description)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DescriptionService);
//# sourceMappingURL=description.service.js.map