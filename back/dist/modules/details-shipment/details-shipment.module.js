"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsShipmentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const details_shipment_service_1 = require("./details-shipment.service");
const details_shipment_controller_1 = require("./details-shipment.controller");
const DetailsShipment_entity_1 = require("../../entities/DetailsShipment.entity");
let DetailsShipmentModule = class DetailsShipmentModule {
};
exports.DetailsShipmentModule = DetailsShipmentModule;
exports.DetailsShipmentModule = DetailsShipmentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([DetailsShipment_entity_1.DetailsShipment])],
        providers: [details_shipment_service_1.DetailsShipmentService],
        controllers: [details_shipment_controller_1.DetailsShipmentController],
    })
], DetailsShipmentModule);
//# sourceMappingURL=details-shipment.module.js.map