// src/seeder/seeder.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { SecuringSeals } from '../entities/SecuringSeals.entity';
import { UnstuffingContainer } from '../entities/UnstuffingContainer.entity';
import { PreExistingDamage } from '../entities/PreExistingDamage.entity';
import { Containers } from '../entities/Containers.entity';
import { ImagesPathimg } from '../entities/ImagesPathimg.entity';
import { ImagesGroup } from '../entities/ImagesGroup.entity';
import { Description } from '../entities/Description.entity';
import { DescriptionsGroup } from '../entities/DescriptionsGroup.entity';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(SecuringSeals)
    private securingSealsRepository: Repository<SecuringSeals>,
    @InjectRepository(UnstuffingContainer)
    private unstuffingContainerRepository: Repository<UnstuffingContainer>,
    @InjectRepository(PreExistingDamage)
    private preExistingDamageRepository: Repository<PreExistingDamage>,
    @InjectRepository(Containers)
    private containersRepository: Repository<Containers>,
    @InjectRepository(ImagesPathimg)
    private imagesPathimgRepository: Repository<ImagesPathimg>,
    @InjectRepository(ImagesGroup)
    private imagesGroupRepository: Repository<ImagesGroup>,
    @InjectRepository(Description)
    private descriptionRepository: Repository<Description>,
    @InjectRepository(DescriptionsGroup)
    private descriptionsGroupRepository: Repository<DescriptionsGroup>,
  ) {}

  async seed(): Promise<void> {
    await this.seedDescriptions();
    await this.seedContainers();
    await this.seedSecuringSeals();
    await this.seedUnstuffingContainers();
    await this.seedPreExistingDamages();
    await this.seedImagesPathimg();
    await this.seedImagesGroup();
    await this.seedDescriptionsGroup();
  }

  private async seedDescriptions() {
    const description = this.descriptionRepository.create({
      description: 'Initial description for seed',
    });
    await this.descriptionRepository.save(description);
  }

  private async seedContainers() {
    const container = this.containersRepository.create({
      containerCode: 'ABC123',
      description: 'General container description',
    });
    await this.containersRepository.save(container);
  }

  private async seedSecuringSeals() {
    const securingSeal = this.securingSealsRepository.create({
      container: await this.containersRepository.findOneBy({ id: 1 }), // assuming container with id 1 exists
      type: 'Type A',
      wwasSafetySeals: 'Seal A',
      argentineanCustomsSeal: 'Custom Seal A',
      others: 'Other seals',
    });
    await this.securingSealsRepository.save(securingSeal);
  }

  private async seedUnstuffingContainers() {
    const unstuffingContainer = this.unstuffingContainerRepository.create({
      description: await this.descriptionRepository.findOneBy({ id: 1 }), // assuming description with id 1 exists
      detailsShipment: null, // set this properly when detailsShipment entity exists
    });
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
      detailsShipment: null, // set this properly when detailsShipment entity exists
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
    // Crear o recuperar múltiples imágenes
    const imagesPathimgs = await this.imagesPathimgRepository.find({
      where: { id: In([1, 2, 3]) }, // Suponiendo que tienes imágenes con id 1, 2 y 3
    });
  
    const imagesGroup = this.imagesGroupRepository.create({
      title: 'Group A',
      description: 'Group description',
      imagesPathimg: imagesPathimgs, // Asignar múltiples imágenes
    });
  
    await this.imagesGroupRepository.save(imagesGroup);
  }
  
  private async seedDescriptionsGroup() {
    const descriptionsGroup = this.descriptionsGroupRepository.create({
      description: await this.descriptionRepository.findOneBy({ id: 1 }),
      title: 'Seed Group Title',
    });
    await this.descriptionsGroupRepository.save(descriptionsGroup);
  }
}
