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
exports.UnstuffingContainerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const UnstuffingContainer_entity_1 = require("../../entities/UnstuffingContainer.entity");
let UnstuffingContainerService = class UnstuffingContainerService {
    constructor(unstuffingContainerRepository) {
        this.unstuffingContainerRepository = unstuffingContainerRepository;
    }
    async createUnstuffingContainer(data) {
        const unstuffingContainer = this.unstuffingContainerRepository.create(data);
        return this.unstuffingContainerRepository.save(unstuffingContainer);
    }
    async findAllUnstuffingContainers() {
        return this.unstuffingContainerRepository.find();
    }
    async findUnstuffingContainerById(id) {
        return this.unstuffingContainerRepository.findOne({ where: { id } });
    }
    async updateUnstuffingContainer(id, data) {
        await this.unstuffingContainerRepository.update(id, data);
        return this.unstuffingContainerRepository.findOne({ where: { id } });
    }
    async deleteUnstuffingContainer(id) {
        await this.unstuffingContainerRepository.delete(id);
    }
};
exports.UnstuffingContainerService = UnstuffingContainerService;
exports.UnstuffingContainerService = UnstuffingContainerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(UnstuffingContainer_entity_1.UnstuffingContainer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UnstuffingContainerService);
//# sourceMappingURL=unstuffing-container.service.js.map