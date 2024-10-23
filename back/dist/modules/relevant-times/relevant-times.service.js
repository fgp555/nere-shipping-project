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
exports.RelevantTimesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const RelevantTimes_entity_1 = require("../../entities/RelevantTimes.entity");
let RelevantTimesService = class RelevantTimesService {
    constructor(relevantTimesRepository) {
        this.relevantTimesRepository = relevantTimesRepository;
    }
    async createRelevantTimes(data) {
        const relevantTimes = this.relevantTimesRepository.create(data);
        return this.relevantTimesRepository.save(relevantTimes);
    }
    async findAllRelevantTimes() {
        return this.relevantTimesRepository.find();
    }
    async findRelevantTimesById(id) {
        return this.relevantTimesRepository.findOne({ where: { id } });
    }
    async updateRelevantTimes(id, data) {
        await this.relevantTimesRepository.update(id, data);
        return this.relevantTimesRepository.findOne({ where: { id } });
    }
    async deleteRelevantTimes(id) {
        await this.relevantTimesRepository.delete(id);
    }
};
exports.RelevantTimesService = RelevantTimesService;
exports.RelevantTimesService = RelevantTimesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(RelevantTimes_entity_1.RelevantTimes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RelevantTimesService);
//# sourceMappingURL=relevant-times.service.js.map