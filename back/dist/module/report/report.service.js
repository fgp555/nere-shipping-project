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
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const report_entity_1 = require("./entities/report.entity");
const typeorm_2 = require("typeorm");
let ReportService = class ReportService {
    constructor(reportRepository) {
        this.reportRepository = reportRepository;
    }
    async create(createReportDto) {
        const existingReport = await this.reportRepository.findOne({
            where: {
                mbl_code: createReportDto.mbl_code,
            },
        });
        if (existingReport)
            throw new common_1.ConflictException('The MBL code already exists');
        return await this.reportRepository.save(createReportDto);
    }
    findAll() {
        return this.reportRepository.find();
    }
    async findOne(mbl_code) {
        const report = await this.reportRepository.findOne({ where: { mbl_code } });
        if (!report)
            throw new common_1.NotFoundException('Report not found');
        return report;
    }
    async dowloadTest() {
        return `This action downloads a # report`;
    }
    async download(mbl_code) {
        return `This action downloads a #${mbl_code} report`;
    }
    async mbl_code() {
        const reports = await this.reportRepository
            .createQueryBuilder('report')
            .select('report.mbl_code')
            .getRawMany();
        return reports;
    }
    async mbl_code_userId(userId) {
        return 'mbl_code_userId';
    }
    update(id, updateReportDto) {
        return `This action updates a #${id} report`;
    }
    async remove(mbl_code) {
        const report = await this.reportRepository.findOne({
            where: { mbl_code: mbl_code },
            relations: [
                't0_header',
                't1_details_shipment',
                'T2_relevant_times',
                't3_securing_seals',
                't4_unstuffing',
                't5_damage',
                't6_footer',
            ],
        });
        if (!report) {
            throw new common_1.NotFoundException(`Report with ID ${mbl_code} not found`);
        }
        return await this.reportRepository.remove(report);
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(report_entity_1.ReportEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReportService);
//# sourceMappingURL=report.service.js.map