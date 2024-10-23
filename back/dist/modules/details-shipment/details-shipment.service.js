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
exports.DetailsShipmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const DetailsShipment_entity_1 = require("../../entities/DetailsShipment.entity");
let DetailsShipmentService = class DetailsShipmentService {
    constructor(detailsShipmentRepository) {
        this.detailsShipmentRepository = detailsShipmentRepository;
    }
    async createDetailsShipment(data) {
        const detailsShipment = this.detailsShipmentRepository.create(data);
        return this.detailsShipmentRepository.save(detailsShipment);
    }
    async findAllDetailsShipments() {
        return this.detailsShipmentRepository.find();
    }
    async findDetailsShipmentById(id) {
        return this.detailsShipmentRepository.findOne({ where: { id } });
    }
    async updateDetailsShipment(id, data) {
        await this.detailsShipmentRepository.update(id, data);
        return this.detailsShipmentRepository.findOne({ where: { id } });
    }
    async deleteDetailsShipment(id) {
        await this.detailsShipmentRepository.delete(id);
    }
};
exports.DetailsShipmentService = DetailsShipmentService;
exports.DetailsShipmentService = DetailsShipmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(DetailsShipment_entity_1.DetailsShipment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DetailsShipmentService);
//# sourceMappingURL=details-shipment.service.js.map