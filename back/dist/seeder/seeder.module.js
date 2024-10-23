"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const seeder_service_1 = require("./seeder.service");
const SecuringSeals_entity_1 = require("../entities/SecuringSeals.entity");
const UnstuffingContainer_entity_1 = require("../entities/UnstuffingContainer.entity");
const PreExistingDamage_entity_1 = require("../entities/PreExistingDamage.entity");
const Containers_entity_1 = require("../entities/Containers.entity");
const ImagesPathimg_entity_1 = require("../entities/ImagesPathimg.entity");
const ImagesGroup_entity_1 = require("../entities/ImagesGroup.entity");
const Description_entity_1 = require("../entities/Description.entity");
const DescriptionsGroup_entity_1 = require("../entities/DescriptionsGroup.entity");
let SeederModule = class SeederModule {
};
exports.SeederModule = SeederModule;
exports.SeederModule = SeederModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                SecuringSeals_entity_1.SecuringSeals,
                UnstuffingContainer_entity_1.UnstuffingContainer,
                PreExistingDamage_entity_1.PreExistingDamage,
                Containers_entity_1.Containers,
                ImagesPathimg_entity_1.ImagesPathimg,
                ImagesGroup_entity_1.ImagesGroup,
                Description_entity_1.Description,
                DescriptionsGroup_entity_1.DescriptionsGroup,
            ]),
        ],
        providers: [seeder_service_1.SeederService],
        exports: [seeder_service_1.SeederService],
    })
], SeederModule);
//# sourceMappingURL=seeder.module.js.map