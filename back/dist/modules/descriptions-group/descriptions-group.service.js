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
exports.DescriptionsGroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const DescriptionsGroup_entity_1 = require("../../entities/DescriptionsGroup.entity");
let DescriptionsGroupService = class DescriptionsGroupService {
    constructor(descriptionsGroupRepository) {
        this.descriptionsGroupRepository = descriptionsGroupRepository;
    }
    async createDescriptionsGroup(data) {
        const descriptionsGroup = this.descriptionsGroupRepository.create(data);
        return this.descriptionsGroupRepository.save(descriptionsGroup);
    }
    async findAllDescriptionsGroups() {
        return this.descriptionsGroupRepository.find();
    }
    async findDescriptionsGroupById(id) {
        return this.descriptionsGroupRepository.findOne({ where: { id } });
    }
    async updateDescriptionsGroup(id, data) {
        await this.descriptionsGroupRepository.update(id, data);
        return this.descriptionsGroupRepository.findOne({ where: { id } });
    }
    async deleteDescriptionsGroup(id) {
        await this.descriptionsGroupRepository.delete(id);
    }
};
exports.DescriptionsGroupService = DescriptionsGroupService;
exports.DescriptionsGroupService = DescriptionsGroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(DescriptionsGroup_entity_1.DescriptionsGroup)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DescriptionsGroupService);
//# sourceMappingURL=descriptions-group.service.js.map