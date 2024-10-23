"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeOrm_1 = require("./config/typeOrm");
const Report_entity_1 = require("./entities/Report.entity");
const DetailsShipment_entity_1 = require("./entities/DetailsShipment.entity");
const RelevantTimes_entity_1 = require("./entities/RelevantTimes.entity");
const SecuringSeals_entity_1 = require("./entities/SecuringSeals.entity");
const UnstuffingContainer_entity_1 = require("./entities/UnstuffingContainer.entity");
const PreExistingDamage_entity_1 = require("./entities/PreExistingDamage.entity");
const Containers_entity_1 = require("./entities/Containers.entity");
const ImagesPathimg_entity_1 = require("./entities/ImagesPathimg.entity");
const ImagesGroup_entity_1 = require("./entities/ImagesGroup.entity");
const Description_entity_1 = require("./entities/Description.entity");
const DescriptionsGroup_entity_1 = require("./entities/DescriptionsGroup.entity");
const containers_module_1 = require("./modules/containers/containers.module");
const description_module_1 = require("./modules/description/description.module");
const descriptions_group_module_1 = require("./modules/descriptions-group/descriptions-group.module");
const details_shipment_module_1 = require("./modules/details-shipment/details-shipment.module");
const images_group_module_1 = require("./modules/images-group/images-group.module");
const images_pathimg_module_1 = require("./modules/images-pathimg/images-pathimg.module");
const pre_existing_damage_module_1 = require("./modules/pre-existing-damage/pre-existing-damage.module");
const relevant_times_module_1 = require("./modules/relevant-times/relevant-times.module");
const report_module_1 = require("./modules/report/report.module");
const securing_seals_module_1 = require("./modules/securing-seals/securing-seals.module");
const unstuffing_container_module_1 = require("./modules/unstuffing-container/unstuffing-container.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [typeOrm_1.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => config.get('typeorm'),
            }),
            typeorm_1.TypeOrmModule.forFeature([
                Report_entity_1.Report,
                DetailsShipment_entity_1.DetailsShipment,
                RelevantTimes_entity_1.RelevantTimes,
                SecuringSeals_entity_1.SecuringSeals,
                UnstuffingContainer_entity_1.UnstuffingContainer,
                PreExistingDamage_entity_1.PreExistingDamage,
                Containers_entity_1.Container,
                ImagesPathimg_entity_1.ImagesPathimg,
                ImagesGroup_entity_1.ImagesGroup,
                Description_entity_1.Description,
                DescriptionsGroup_entity_1.DescriptionsGroup,
            ]),
            containers_module_1.ContainersModule,
            description_module_1.DescriptionModule,
            descriptions_group_module_1.DescriptionsGroupModule,
            details_shipment_module_1.DetailsShipmentModule,
            images_group_module_1.ImagesGroupModule,
            images_pathimg_module_1.ImagesPathimgModule,
            pre_existing_damage_module_1.PreExistingDamageModule,
            relevant_times_module_1.RelevantTimesModule,
            report_module_1.ReportModule,
            securing_seals_module_1.SecuringSealsModule,
            unstuffing_container_module_1.UnstuffingContainerModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map