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
const t5_damage_entity_1 = require("./entities/t5_damage.entity");
const t5_image_group_entity_1 = require("./entities/t5_image-group.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const report_entity_1 = require("../report/entities/report.entity");
let T5DamageService = class T5DamageService {
    constructor(t5DamageRepository, reportRepository) {
        this.t5DamageRepository = t5DamageRepository;
        this.reportRepository = reportRepository;
    }
    async create(createReportDto, mbl_code, files) {
        const { notes, images_groups } = createReportDto;
        const foundReport = await this.reportRepository.findOne({
            where: { mbl_code },
        });
        if (!foundReport) {
            throw new common_1.NotFoundException('Report not found');
        }
        const t5Damage = new t5_damage_entity_1.T5DamageEntity();
        t5Damage.notes = notes;
        t5Damage.report_mbl_code = foundReport;
        const groupedFiles = files.reduce((acc, file) => {
            const groupName = file.fieldname.split('_files')[0];
            if (!acc[groupName])
                acc[groupName] = [];
            acc[groupName].push(`/uploads/t5_damage/${file.filename}`);
            return acc;
        }, {});
        t5Damage.images_groups = images_groups.map((groupData) => {
            const imageGroup = new t5_image_group_entity_1.T5ImageGroupEntity();
            imageGroup.group_name = groupData.group_name;
            imageGroup.title = groupData.title;
            imageGroup.b_l_no = groupData.b_l_no;
            imageGroup.consignee = groupData.consignee;
            imageGroup.marks = groupData.marks;
            imageGroup.qty_of_pkgs = groupData.qty_of_pkgs;
            imageGroup.goods = groupData.goods;
            imageGroup.remarks = groupData.remarks;
            imageGroup.images = groupedFiles[groupData.group_name] || [];
            imageGroup.images_notes = groupData.images_notes;
            return imageGroup;
        });
        return await this.t5DamageRepository.save(t5Damage);
    }
    findAll() {
        return this.t5DamageRepository.find();
    }
    remove(id) {
        return this.t5DamageRepository.delete(id);
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