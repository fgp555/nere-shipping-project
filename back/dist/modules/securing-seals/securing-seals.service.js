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
exports.SecuringSealsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const SecuringSeals_entity_1 = require("../../entities/SecuringSeals.entity");
let SecuringSealsService = class SecuringSealsService {
    constructor(securingSealsRepository) {
        this.securingSealsRepository = securingSealsRepository;
    }
    async createSecuringSeal(data) {
        const securingSeal = this.securingSealsRepository.create(data);
        return this.securingSealsRepository.save(securingSeal);
    }
    async findAllSecuringSeals() {
        return this.securingSealsRepository.find();
    }
    async findSecuringSealById(id) {
        return this.securingSealsRepository.findOne({ where: { id } });
    }
    async updateSecuringSeal(id, data) {
        await this.securingSealsRepository.update(id, data);
        return this.securingSealsRepository.findOne({ where: { id } });
    }
    async deleteSecuringSeal(id) {
        await this.securingSealsRepository.delete(id);
    }
};
exports.SecuringSealsService = SecuringSealsService;
exports.SecuringSealsService = SecuringSealsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(SecuringSeals_entity_1.SecuringSeals)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SecuringSealsService);
//# sourceMappingURL=securing-seals.service.js.map