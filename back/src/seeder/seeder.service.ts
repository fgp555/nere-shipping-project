// back/src/seeder/seeder.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { SecuringSeals } from '../entities/SecuringSeals.entity';
import { UnstuffingContainer } from '../entities/UnstuffingContainer.entity';
import { PreExistingDamage } from '../entities/PreExistingDamage.entity';
import { Container } from '../entities/Containers.entity';
import { ImagesPathimg } from '../entities/ImagesPathimg.entity';
import { ImagesGroup } from '../entities/ImagesGroup.entity';
import { Description } from '../entities/Description.entity';
import { DescriptionsGroup } from '../entities/DescriptionsGroup.entity';
import { DetailsShipment } from '../entities/DetailsShipment.entity'; // Import DetailsShipment entity

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(SecuringSeals)
    private securingSealsRepository: Repository<SecuringSeals>,
    @InjectRepository(UnstuffingContainer)
    private unstuffingContainerRepository: Repository<UnstuffingContainer>,
    @InjectRepository(PreExistingDamage)
    private preExistingDamageRepository: Repository<PreExistingDamage>,
    @InjectRepository(Container)
    private containersRepository: Repository<Container>,
    @InjectRepository(ImagesPathimg)
    private imagesPathimgRepository: Repository<ImagesPathimg>,
    @InjectRepository(ImagesGroup)
    private imagesGroupRepository: Repository<ImagesGroup>,
    @InjectRepository(Description)
    private descriptionRepository: Repository<Description>,
    @InjectRepository(DescriptionsGroup)
    private descriptionsGroupRepository: Repository<DescriptionsGroup>,
    @InjectRepository(DetailsShipment) // Inject DetailsShipment repository
    private detailsShipmentRepository: Repository<DetailsShipment>,
  ) {}

  async seed(): Promise<void> {
    await this.seedDescriptions();
    await this.seedContainers();
    await this.seedDetailsShipment(); // Add seedDetailsShipment
    await this.seedSecuringSeals();
    await this.seedUnstuffingContainers();
    await this.seedPreExistingDamages();
    await this.seedImagesPathimg();
    await this.seedImagesGroup();
    await this.seedDescriptionsGroup();
  }

  private async seedDetailsShipment() {
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

  private async seedDescriptions() {
    const description = this.descriptionRepository.create({
      description: 'Initial description for seed',
    });
    await this.descriptionRepository.save(description);
  }

  private async seedContainers() {
    const container = this.containersRepository.create({
      containerCode: 'FSCU5726799',
      description: 'FSCU5726799 x 40-ft non-operating reefer container',
    });
    await this.containersRepository.save(container);
  }

  private async seedSecuringSeals() {
    const containers = await this.containersRepository.find({
      where: { id: In([1, 2]) },
    });

    if (containers.length === 0) {
      throw new Error(
        'Containers not found. Ensure containers with id 1 and 2 exist.',
      );
    }

    const detailsShipment = await this.detailsShipmentRepository.findOneBy({
      id: 1,
    });

    if (!detailsShipment) {
      throw new Error(
        'DetailsShipment not found. Ensure detailsShipment with id 1 exists.',
      );
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

  private async seedUnstuffingContainers() {
    // Obtenemos las descripciones
    const descriptions = await this.descriptionRepository.find({
      where: { id: In([1]) }, // Verificamos que existan las descripciones con id 1 y 2
    });

    // Verificamos si las descripciones fueron encontradas
    if (!descriptions || descriptions.length === 0) {
      throw new Error(
        'Descriptions not found. Please ensure descriptions with id 1 and 2 exist.',
      );
    }

    // Obtenemos el DetailsShipment
    const detailsShipment = await this.detailsShipmentRepository.findOneBy({
      id: 1,
    });

    // Verificamos si el DetailsShipment fue encontrado
    if (!detailsShipment) {
      throw new Error(
        'DetailsShipment not found. Please ensure DetailsShipment with id 1 exists.',
      );
    }

    // Creamos el UnstuffingContainer con las descripciones y el DetailsShipment
    const unstuffingContainer = this.unstuffingContainerRepository.create({
      descriptions: descriptions, // Asignamos las descripciones
      detailsShipment: detailsShipment, // Asignamos el DetailsShipment
    });

    // Guardamos el UnstuffingContainer
    await this.unstuffingContainerRepository.save(unstuffingContainer);
  }

  private async seedPreExistingDamages() {
    const preExistingDamage = this.preExistingDamageRepository.create({
      blNo: 'BL123',
      consignee: 'Consignee A',
      marks: 'Mark A',
      qtyOfPkgs: 5,
      goods: 'Goods A',
      remarks: 'Some remarks',
      damageDescription: await this.descriptionRepository.findOneBy({ id: 1 }),
      detailsShipment: await this.detailsShipmentRepository.findOneBy({
        id: 1,
      }), // assuming detailsShipment with id 1 exists
    });
    await this.preExistingDamageRepository.save(preExistingDamage);
  }

  private async seedImagesPathimg() {
    const imagesPathimg = this.imagesPathimgRepository.create({
      path: '/path/to/image.jpg',
      description: 'Seeded image description',
    });
    await this.imagesPathimgRepository.save(imagesPathimg);
  }

  private async seedImagesGroup() {
    const imagesPathimgs = await this.imagesPathimgRepository.find({
      where: { id: In([1, 2, 3]) }, // assuming images with id 1, 2, and 3 exist
    });

    const imagesGroup = this.imagesGroupRepository.create({
      title: 'Group A',
      description: 'Group description',
      imagesPathimg: imagesPathimgs,
    });

    await this.imagesGroupRepository.save(imagesGroup);
  }

  private async seedDescriptionsGroup() {
    const descriptions = await this.descriptionRepository.find({
      where: { id: In([1, 2, 3]) }, // assuming descriptions with id 1, 2, and 3 exist
    });

    const descriptionsGroup = this.descriptionsGroupRepository.create({
      title: 'Seed Group Title',
      descriptions: descriptions,
    });

    await this.descriptionsGroupRepository.save(descriptionsGroup);
  }
}
