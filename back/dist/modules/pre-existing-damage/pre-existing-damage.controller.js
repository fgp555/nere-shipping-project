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
exports.PreExistingDamageController = void 0;
const common_1 = require("@nestjs/common");
const pre_existing_damage_service_1 = require("./pre-existing-damage.service");
let PreExistingDamageController = class PreExistingDamageController {
    constructor(preExistingDamageService) {
        this.preExistingDamageService = preExistingDamageService;
    }
    async create(createPreExistingDamageDto) {
        return this.preExistingDamageService.createPreExistingDamage(createPreExistingDamageDto);
    }
    async findAll() {
        return this.preExistingDamageService.findAllPreExistingDamages();
    }
    async findOne(id) {
        return this.preExistingDamageService.findPreExistingDamageById(id);
    }
    async update(id, updatePreExistingDamageDto) {
        return this.preExistingDamageService.updatePreExistingDamage(id, updatePreExistingDamageDto);
    }
    async remove(id) {
        return this.preExistingDamageService.deletePreExistingDamage(id);
    }
};
exports.PreExistingDamageController = PreExistingDamageController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PreExistingDamageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PreExistingDamageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PreExistingDamageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PreExistingDamageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PreExistingDamageController.prototype, "remove", null);
exports.PreExistingDamageController = PreExistingDamageController = __decorate([
    (0, common_1.Controller)('pre-existing-damages'),
    __metadata("design:paramtypes", [pre_existing_damage_service_1.PreExistingDamageService])
], PreExistingDamageController);
//# sourceMappingURL=pre-existing-damage.controller.js.map