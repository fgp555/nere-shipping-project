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
exports.T5DamageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const t5_damage_entity_1 = require("./entities/t5_damage.entity");
const typeorm_2 = require("typeorm");
const report_entity_1 = require("../report/entities/report.entity");
let T5DamageService = class T5DamageService {
    constructor(t5DamageRepository, reportRepository) {
        this.t5DamageRepository = t5DamageRepository;
        this.reportRepository = reportRepository;
    }
    async create(createT5DamageDto) {
        const foundReport = await this.reportRepository.findOne({
            where: {
                mbl_code: createT5DamageDto.report_mbl_code,
            },
        });
        const createdT5Damage = this.t5DamageRepository.create({
            ...createT5DamageDto,
            report_mbl_code: foundReport,
        });
        const savedT5Damage = await this.t5DamageRepository.save(createdT5Damage);
        return savedT5Damage;
    }
    findAll() {
        return this.t5DamageRepository.find();
    }
    async findOne(id) {
        return await this.t5DamageRepository.findOne({ where: { id } });
    }
    async update(id, updateT5DamageDto) {
        await this.t5DamageRepository.update(id, updateT5DamageDto);
        return this.findOne(id);
    }
    async remove(id) {
        const record = await this.findOne(id);
        await this.t5DamageRepository.delete(id);
        return record;
    }
};
exports.T5DamageService = T5DamageService;
exports.T5DamageService = T5DamageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(t5_damage_entity_1.T5DamageEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(report_entity_1.ReportEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], T5DamageService);
//# sourceMappingURL=t5_damage.service.js.map