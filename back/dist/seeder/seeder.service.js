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
const DetailsShipment_entity_1 = require("../entities/DetailsShipment.entity");
let SeederService = class SeederService {
    constructor(securingSealsRepository, unstuffingContainerRepository, preExistingDamageRepository, containersRepository, imagesPathimgRepository, imagesGroupRepository, descriptionRepository, descriptionsGroupRepository, detailsShipmentRepository) {
        this.securingSealsRepository = securingSealsRepository;
        this.unstuffingContainerRepository = unstuffingContainerRepository;
        this.preExistingDamageRepository = preExistingDamageRepository;
        this.containersRepository = containersRepository;
        this.imagesPathimgRepository = imagesPathimgRepository;
        this.imagesGroupRepository = imagesGroupRepository;
        this.descriptionRepository = descriptionRepository;
        this.descriptionsGroupRepository = descriptionsGroupRepository;
        this.detailsShipmentRepository = detailsShipmentRepository;
    }
    async seed() {
        await this.seedDescriptions();
        await this.seedContainers();
        await this.seedDetailsShipment();
        await this.seedSecuringSeals();
        await this.seedImagesPathimg();
        await this.seedImagesGroup();
        await this.seedDescriptionsGroup();
    }
    async seedDetailsShipment() {
        const detailsShipment = this.detailsShipmentRepository.create({
            vessel: 'XIN CHANG SHA',
            voyage: '402S',
            mblCode: 'ONEYHAME90065700',
            pol: 'Hamburg, Germany',
            shipper: 'SACO Shipping GmbH',
            pod: 'Buenos Aires, Argentina',
            consignee: 'SACO Shipping S.A.',
            qtyOfPkgs: 94,
            goods: 'Consolidated cargo',
            grossWeight: '38,068.90 kg',
        });
        await this.detailsShipmentRepository.save(detailsShipment);
    }
    async seedDescriptions() {
        const description = this.descriptionRepository.create({
            description: 'Initial description for seed',
        });
        await this.descriptionRepository.save(description);
    }
    async seedContainers() {
        const container = this.containersRepository.create({
            containerCode: 'FSCU5726799',
            description: 'FSCU5726799 x 40-ft non-operating reefer container',
        });
        await this.containersRepository.save(container);
    }
    async seedSecuringSeals() {
        const containers = await this.containersRepository.find({
            where: { id: (0, typeorm_2.In)([1, 2]) },
        });
        if (containers.length === 0) {
            throw new Error('Containers not found. Ensure containers with id 1 and 2 exist.');
        }
        const detailsShipment = await this.detailsShipmentRepository.findOneBy({
            id: 1,
        });
        if (!detailsShipment) {
            throw new Error('DetailsShipment not found. Ensure detailsShipment with id 1 exists.');
        }
        const securingSeal = this.securingSealsRepository.create({
            containers: containers,
            type: 'Type A',
            wwasSafetySeals: 'Seal A',
            argentineanCustomsSeal: 'Custom Seal A',
            others: 'Other seals',
            detailsShipment: detailsShipment,
        });
        await this.securingSealsRepository.save(securingSeal);
    }
    async seedUnstuffingContainers() {
        const descriptions = await this.descriptionRepository.find({
            where: { id: (0, typeorm_2.In)([1, 2]) },
        });
        if (!descriptions || descriptions.length === 0) {
            throw new Error('Descriptions not found. Please ensure descriptions with id 1 and 2 exist.');
        }
        const detailsShipment = await this.detailsShipmentRepository.findOneBy({
            id: 1,
        });
        if (!detailsShipment) {
            throw new Error('DetailsShipment not found. Please ensure DetailsShipment with id 1 exists.');
        }
        const unstuffingContainer = this.unstuffingContainerRepository.create({
            descriptionsGroup: descriptions,
            detailsShipment: detailsShipment,
        });
        await this.unstuffingContainerRepository.save(unstuffingContainer);
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
        const descriptions = await this.descriptionRepository.find({
            where: { id: (0, typeorm_2.In)([1, 2, 3]) },
        });
        const descriptionsGroup = this.descriptionsGroupRepository.create({
            title: 'Seed Group Title',
            descriptions: descriptions,
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
    __param(3, (0, typeorm_1.InjectRepository)(Containers_entity_1.Container)),
    __param(4, (0, typeorm_1.InjectRepository)(ImagesPathimg_entity_1.ImagesPathimg)),
    __param(5, (0, typeorm_1.InjectRepository)(ImagesGroup_entity_1.ImagesGroup)),
    __param(6, (0, typeorm_1.InjectRepository)(Description_entity_1.Description)),
    __param(7, (0, typeorm_1.InjectRepository)(DescriptionsGroup_entity_1.DescriptionsGroup)),
    __param(8, (0, typeorm_1.InjectRepository)(DetailsShipment_entity_1.DetailsShipment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SeederService);
//# sourceMappingURL=seeder.service.js.map