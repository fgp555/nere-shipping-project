import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImagesGroup } from '../../entities/ImagesGroup.entity';

@Injectable()
export class ImagesGroupService {
  constructor(
    @InjectRepository(ImagesGroup)
    private readonly imagesGroupRepository: Repository<ImagesGroup>,
  ) {}

  async createImagesGroup(data: Partial<ImagesGroup>): Promise<ImagesGroup> {
    const imagesGroup = this.imagesGroupRepository.create(data);
    return this.imagesGroupRepository.save(imagesGroup);
  }

  async findAllImagesGroups(): Promise<ImagesGroup[]> {
    return this.imagesGroupRepository.find();
  }

  async findImagesGroupById(id: number): Promise<ImagesGroup> {
    return this.imagesGroupRepository.findOne({ where: { id } });
  }

  async updateImagesGroup(id: number, data: Partial<ImagesGroup>): Promise<ImagesGroup> {
    await this.imagesGroupRepository.update(id, data);
    return this.imagesGroupRepository.findOne({ where: { id } });
  }

  async deleteImagesGroup(id: number): Promise<void> {
    await this.imagesGroupRepository.delete(id);
  }
}
