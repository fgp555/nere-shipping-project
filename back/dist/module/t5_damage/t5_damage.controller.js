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
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let T5DamageController = class T5DamageController {
    constructor(t5DamageService) {
        this.t5DamageService = t5DamageService;
    }
    async create(data, files) {
        const { mbl_code, notes, images_groups } = JSON.parse(data);
        return this.t5DamageService.create({ notes, images_groups }, mbl_code, files);
    }
    findAll() {
        return this.t5DamageService.findAll();
    }
    remove(id) {
        return this.t5DamageService.remove(+id);
    }
};
exports.T5DamageController = T5DamageController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)({
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/t5_damage',
            filename: (req, file, callback) => {
                const uniqueSuffix = new Date().toISOString().replace(/[:.\-Z]/g, '');
                callback(null, `${uniqueSuffix}_${file.fieldname}_${file.originalname}`);
            },
        }),
    })),
    __param(0, (0, common_1.Body)('data')),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], T5DamageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], T5DamageController.prototype, "findAll", null);
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