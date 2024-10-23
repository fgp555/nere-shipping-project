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
exports.RelevantTimesController = void 0;
const common_1 = require("@nestjs/common");
const relevant_times_service_1 = require("./relevant-times.service");
let RelevantTimesController = class RelevantTimesController {
    constructor(relevantTimesService) {
        this.relevantTimesService = relevantTimesService;
    }
    async create(createRelevantTimesDto) {
        return this.relevantTimesService.createRelevantTimes(createRelevantTimesDto);
    }
    async findAll() {
        return this.relevantTimesService.findAllRelevantTimes();
    }
    async findOne(id) {
        return this.relevantTimesService.findRelevantTimesById(id);
    }
    async update(id, updateRelevantTimesDto) {
        return this.relevantTimesService.updateRelevantTimes(id, updateRelevantTimesDto);
    }
    async remove(id) {
        return this.relevantTimesService.deleteRelevantTimes(id);
    }
};
exports.RelevantTimesController = RelevantTimesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RelevantTimesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RelevantTimesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RelevantTimesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RelevantTimesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RelevantTimesController.prototype, "remove", null);
exports.RelevantTimesController = RelevantTimesController = __decorate([
    (0, common_1.Controller)('relevant-times'),
    __metadata("design:paramtypes", [relevant_times_service_1.RelevantTimesService])
], RelevantTimesController);
//# sourceMappingURL=relevant-times.controller.js.map