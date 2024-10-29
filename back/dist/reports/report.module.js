"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const report_service_1 = require("./report.service");
const report_controller_1 = require("./report.controller");
const report_entity_1 = require("./entities/report.entity");
const header_entity_1 = require("./entities/header.entity");
const details_shipment_entity_1 = require("./entities/details-shipment.entity");
const relevant_times_entity_1 = require("./entities/relevant-times.entity");
const securing_seals_entity_1 = require("./entities/securing-seals.entity");
const unstuffing_container_entity_1 = require("./entities/unstuffing-container.entity");
const pre_existing_damage_entity_1 = require("./entities/pre-existing-damage.entity");
const weather_entity_1 = require("./entities/weather.entity");
const footer_entity_1 = require("./entities/footer.entity");
let ReportModule = class ReportModule {
};
exports.ReportModule = ReportModule;
exports.ReportModule = ReportModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                report_entity_1.Report,
                header_entity_1.Header,
                details_shipment_entity_1.DetailsShipment,
                relevant_times_entity_1.RelevantTimes,
                securing_seals_entity_1.SecuringSeals,
                unstuffing_container_entity_1.UnstuffingContainer,
                pre_existing_damage_entity_1.PreExistingDamage,
                weather_entity_1.Weather,
                footer_entity_1.Footer,
            ]),
        ],
        controllers: [report_controller_1.ReportController],
        providers: [report_service_1.ReportService],
    })
], ReportModule);
//# sourceMappingURL=report.module.js.map