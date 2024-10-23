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
exports.ContainersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Containers_entity_1 = require("../../entities/Containers.entity");
let ContainersService = class ContainersService {
    constructor(containersRepository) {
        this.containersRepository = containersRepository;
    }
    async createContainer(data) {
        const container = this.containersRepository.create(data);
        return this.containersRepository.save(container);
    }
    async findAllContainers() {
        return this.containersRepository.find();
    }
    async findContainerById(id) {
        return this.containersRepository.findOne({ where: { id } });
    }
    async updateContainer(id, data) {
        await this.containersRepository.update(id, data);
        return this.containersRepository.findOne({ where: { id } });
    }
    async deleteContainer(id) {
        await this.containersRepository.delete(id);
    }
};
exports.ContainersService = ContainersService;
exports.ContainersService = ContainersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Containers_entity_1.Container)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContainersService);
//# sourceMappingURL=containers.service.js.map