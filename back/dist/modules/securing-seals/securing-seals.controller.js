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
exports.SecuringSealsController = void 0;
const common_1 = require("@nestjs/common");
const securing_seals_service_1 = require("./securing-seals.service");
let SecuringSealsController = class SecuringSealsController {
    constructor(securingSealsService) {
        this.securingSealsService = securingSealsService;
    }
    async create(createSecuringSealDto) {
        return this.securingSealsService.createSecuringSeal(createSecuringSealDto);
    }
    async findAll() {
        return this.securingSealsService.findAllSecuringSeals();
    }
    async findOne(id) {
        return this.securingSealsService.findSecuringSealById(id);
    }
    async update(id, updateSecuringSealDto) {
        return this.securingSealsService.updateSecuringSeal(id, updateSecuringSealDto);
    }
    async remove(id) {
        return this.securingSealsService.deleteSecuringSeal(id);
    }
};
exports.SecuringSealsController = SecuringSealsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SecuringSealsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SecuringSealsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SecuringSealsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SecuringSealsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SecuringSealsController.prototype, "remove", null);
exports.SecuringSealsController = SecuringSealsController = __decorate([
    (0, common_1.Controller)('securing-seals'),
    __metadata("design:paramtypes", [securing_seals_service_1.SecuringSealsService])
], SecuringSealsController);
//# sourceMappingURL=securing-seals.controller.js.map