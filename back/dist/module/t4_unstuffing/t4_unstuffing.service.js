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
exports.T4UnstuffingService = void 0;
const common_1 = require("@nestjs/common");
const t4_unstuffing_entity_1 = require("./entities/t4_unstuffing.entity");
const image_group_entity_1 = require("../image/image-group.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let T4UnstuffingService = class T4UnstuffingService {
    constructor(t4Unstuffing) {
        this.t4Unstuffing = t4Unstuffing;
    }
    async create(createReportDto, imagesGroups, notesGroups) {
        const { notes, foot_note } = createReportDto;
        const report = new t4_unstuffing_entity_1.T4UnstuffingEntity();
        report.notes = notes;
        report.foot_note = foot_note;
        report.images_groups = Object.keys(imagesGroups).map((groupName) => {
            const imageGroup = new image_group_entity_1.ImageGroupEntity();
            imageGroup.group_name = groupName;
            imageGroup.images = imagesGroups[groupName];
            imageGroup.images_notes = notesGroups[groupName] || [];
            return imageGroup;
        });
        return await this.t4Unstuffing.save(report);
    }
    findAll() {
        return this.t4Unstuffing.find();
    }
    findOne(id) {
        return `This action returns a #${id} t4Unstuffing`;
    }
    update(id, updateT4UnstuffingDto) {
        return `This action updates a #${id} t4Unstuffing`;
    }
    remove(id) {
        return `This action removes a #${id} t4Unstuffing`;
    }
};
exports.T4UnstuffingService = T4UnstuffingService;
exports.T4UnstuffingService = T4UnstuffingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(t4_unstuffing_entity_1.T4UnstuffingEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], T4UnstuffingService);
//# sourceMappingURL=t4_unstuffing.service.js.map