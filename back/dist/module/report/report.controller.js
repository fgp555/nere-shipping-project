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
exports.ReportController = void 0;
const common_1 = require("@nestjs/common");
const report_service_1 = require("./report.service");
const update_report_dto_1 = require("./dto/update-report.dto");
let ReportController = class ReportController {
    constructor(reportService) {
        this.reportService = reportService;
    }
    create(createReportDto) {
        return this.reportService.create(createReportDto);
    }
    findAll() {
        return this.reportService.findAll();
    }
    mbl_code() {
        return this.reportService.mbl_code();
    }
    findOne(mbl_code) {
        return this.reportService.findOne(mbl_code);
    }
    dowloadTest() {
        return this.reportService.dowloadTest();
    }
    dowload(mbl_code) {
        return this.reportService.download(mbl_code);
    }
    update(id, updateReportDto) {
        return this.reportService.update(+id, updateReportDto);
    }
    remove(mbl_code) {
        return this.reportService.remove(mbl_code);
    }
};
exports.ReportController = ReportController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('mbl_code'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "mbl_code", null);
__decorate([
    (0, common_1.Get)(':mbl_code'),
    __param(0, (0, common_1.Param)('mbl_code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('download/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "dowloadTest", null);
__decorate([
    (0, common_1.Get)('download/:mbl_code'),
    __param(0, (0, common_1.Param)('mbl_code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "dowload", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_report_dto_1.UpdateReportDto]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':mbl_code'),
    __param(0, (0, common_1.Param)('mbl_code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "remove", null);
exports.ReportController = ReportController = __decorate([
    (0, common_1.Controller)('report'),
    __metadata("design:paramtypes", [report_service_1.ReportService])
], ReportController);
//# sourceMappingURL=report.controller.js.map