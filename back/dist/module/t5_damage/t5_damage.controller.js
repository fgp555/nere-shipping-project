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
exports.T5DamageController = void 0;
const common_1 = require("@nestjs/common");
const t5_damage_service_1 = require("./t5_damage.service");
const create_t5_damage_dto_1 = require("./dto/create-t5_damage.dto");
const update_t5_damage_dto_1 = require("./dto/update-t5_damage.dto");
let T5DamageController = class T5DamageController {
    constructor(t5DamageService) {
        this.t5DamageService = t5DamageService;
    }
    create(createT5DamageDto) {
        return this.t5DamageService.create(createT5DamageDto);
    }
    findAll() {
        return this.t5DamageService.findAll();
    }
    findOne(id) {
        return this.t5DamageService.findOne(+id);
    }
    update(id, updateT5DamageDto) {
        return this.t5DamageService.update(+id, updateT5DamageDto);
    }
    remove(id) {
        return this.t5DamageService.remove(+id);
    }
};
exports.T5DamageController = T5DamageController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_t5_damage_dto_1.CreateT5DamageDto]),
    __metadata("design:returntype", void 0)
], T5DamageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], T5DamageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], T5DamageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_t5_damage_dto_1.UpdateT5DamageDto]),
    __metadata("design:returntype", void 0)
], T5DamageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], T5DamageController.prototype, "remove", null);
exports.T5DamageController = T5DamageController = __decorate([
    (0, common_1.Controller)('t5-damage'),
    __metadata("design:paramtypes", [t5_damage_service_1.T5DamageService])
], T5DamageController);
//# sourceMappingURL=t5_damage.controller.js.map