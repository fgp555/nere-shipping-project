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
exports.SeederService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const SecuringSeals_entity_1 = require("../entities/SecuringSeals.entity");
const UnstuffingContainer_entity_1 = require("../entities/UnstuffingContainer.entity");
const PreExistingDamage_entity_1 = require("../entities/PreExistingDamage.entity");
const Containers_entity_1 = require("../entities/Containers.entity");
const ImagesPathimg_entity_1 = require("../entities/ImagesPathimg.entity");
const ImagesGroup_entity_1 = require("../entities/ImagesGroup.entity");
const Description_entity_1 = require("../entities/Description.entity");
const DescriptionsGroup_entity_1 = require("../entities/DescriptionsGroup.entity");
let SeederService = class SeederService {
    constructor(securingSealsRepository, unstuffingContainerRepository, preExistingDamageRepository, containersRepository, imagesPathimgRepository, imagesGroupRepository, descriptionRepository, descriptionsGroupRepository) {
        this.securingSealsRepository = securingSealsRepository;
        this.unstuffingContainerRepository = unstuffingContainerRepository;
        this.preExistingDamageRepository = preExistingDamageRepository;
        this.containersRepository = containersRepository;
        this.imagesPathimgRepository = imagesPathimgRepository;
        this.imagesGroupRepository = imagesGroupRepository;
        this.descriptionRepository = descriptionRepository;
        this.descriptionsGroupRepository = descriptionsGroupRepository;
    }
    async seed() {
        await this.seedDescriptions();
        await this.seedContainers();
        await this.seedSecuringSeals();
        await this.seedUnstuffingContainers();
        await this.seedPreExistingDamages();
        await this.seedImagesPathimg();
        await this.seedImagesGroup();
        await this.seedDescriptionsGroup();
    }
    async seedDescriptions() {
        const description = this.descriptionRepository.create({
            description: 'Initial description for seed',
        });
        await this.descriptionRepository.save(description);
    }
    async seedContainers() {
        const container = this.containersRepository.create({
            containerCode: 'ABC123',
            description: 'General container description',
        });
        await this.containersRepository.save(container);
    }
    async seedSecuringSeals() {
        const securingSeal = this.securingSealsRepository.create({
            container: await this.containersRepository.findOneBy({ id: 1 }),
            type: 'Type A',
            wwasSafetySeals: 'Seal A',
            argentineanCustomsSeal: 'Custom Seal A',
            others: 'Other seals',
        });
        await this.securingSealsRepository.save(securingSeal);
    }
    async seedUnstuffingContainers() {
        const unstuffingContainer = this.unstuffingContainerRepository.create({
            description: await this.descriptionRepository.findOneBy({ id: 1 }),
            detailsShipment: null,
        });
        await this.unstuffingContainerRepository.save(unstuffingContainer);
    }
    async seedPreExistingDamages() {
        const preExistingDamage = this.preExistingDamageRepository.create({
            blNo: 'BL123',
            consignee: 'Consignee A',
            marks: 'Mark A',
            qtyOfPkgs: 5,
            goods: 'Goods A',
            remarks: 'Some remarks',
            damageDescription: await this.descriptionRepository.findOneBy({ id: 1 }),
            detailsShipment: null,
        });
        await this.preExistingDamageRepository.save(preExistingDamage);
    }
    async seedImagesPathimg() {
        const imagesPathimg = this.imagesPathimgRepository.create({
            path: '/path/to/image.jpg',
            description: 'Seeded image description',
        });
        await this.imagesPathimgRepository.save(imagesPathimg);
    }
    async seedImagesGroup() {
        const imagesPathimgs = await this.imagesPathimgRepository.find({
            where: { id: (0, typeorm_2.In)([1, 2, 3]) },
        });
        const imagesGroup = this.imagesGroupRepository.create({
            title: 'Group A',
            description: 'Group description',
            imagesPathimg: imagesPathimgs,
        });
        await this.imagesGroupRepository.save(imagesGroup);
    }
    async seedDescriptionsGroup() {
        const descriptionsGroup = this.descriptionsGroupRepository.create({
            description: await this.descriptionRepository.findOneBy({ id: 1 }),
            title: 'Seed Group Title',
        });
        await this.descriptionsGroupRepository.save(descriptionsGroup);
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(SecuringSeals_entity_1.SecuringSeals)),
    __param(1, (0, typeorm_1.InjectRepository)(UnstuffingContainer_entity_1.UnstuffingContainer)),
    __param(2, (0, typeorm_1.InjectRepository)(PreExistingDamage_entity_1.PreExistingDamage)),
    __param(3, (0, typeorm_1.InjectRepository)(Containers_entity_1.Containers)),
    __param(4, (0, typeorm_1.InjectRepository)(ImagesPathimg_entity_1.ImagesPathimg)),
    __param(5, (0, typeorm_1.InjectRepository)(ImagesGroup_entity_1.ImagesGroup)),
    __param(6, (0, typeorm_1.InjectRepository)(Description_entity_1.Description)),
    __param(7, (0, typeorm_1.InjectRepository)(DescriptionsGroup_entity_1.DescriptionsGroup)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SeederService);
//# sourceMappingURL=seeder.service.js.map