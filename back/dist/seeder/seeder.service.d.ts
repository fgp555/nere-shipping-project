import { Repository } from 'typeorm';
import { SecuringSeals } from '../entities/SecuringSeals.entity';
import { UnstuffingContainer } from '../entities/UnstuffingContainer.entity';
import { PreExistingDamage } from '../entities/PreExistingDamage.entity';
import { Containers } from '../entities/Containers.entity';
import { ImagesPathimg } from '../entities/ImagesPathimg.entity';
import { ImagesGroup } from '../entities/ImagesGroup.entity';
import { Description } from '../entities/Description.entity';
import { DescriptionsGroup } from '../entities/DescriptionsGroup.entity';
export declare class SeederService {
    private securingSealsRepository;
    private unstuffingContainerRepository;
    private preExistingDamageRepository;
    private containersRepository;
    private imagesPathimgRepository;
    private imagesGroupRepository;
    private descriptionRepository;
    private descriptionsGroupRepository;
    constructor(securingSealsRepository: Repository<SecuringSeals>, unstuffingContainerRepository: Repository<UnstuffingContainer>, preExistingDamageRepository: Repository<PreExistingDamage>, containersRepository: Repository<Containers>, imagesPathimgRepository: Repository<ImagesPathimg>, imagesGroupRepository: Repository<ImagesGroup>, descriptionRepository: Repository<Description>, descriptionsGroupRepository: Repository<DescriptionsGroup>);
    seed(): Promise<void>;
    private seedDescriptions;
    private seedContainers;
    private seedSecuringSeals;
    private seedUnstuffingContainers;
    private seedPreExistingDamages;
    private seedImagesPathimg;
    private seedImagesGroup;
    private seedDescriptionsGroup;
}
