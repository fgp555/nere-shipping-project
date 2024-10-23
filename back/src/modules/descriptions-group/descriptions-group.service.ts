import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DescriptionsGroup } from '../../entities/DescriptionsGroup.entity';

@Injectable()
export class DescriptionsGroupService {
  constructor(
    @InjectRepository(DescriptionsGroup)
    private readonly descriptionsGroupRepository: Repository<DescriptionsGroup>,
  ) {}

  async createDescriptionsGroup(data: Partial<DescriptionsGroup>): Promise<DescriptionsGroup> {
    const descriptionsGroup = this.descriptionsGroupRepository.create(data);
    return this.descriptionsGroupRepository.save(descriptionsGroup);
  }

  async findAllDescriptionsGroups(): Promise<DescriptionsGroup[]> {
    return this.descriptionsGroupRepository.find();
  }

  async findDescriptionsGroupById(id: number): Promise<DescriptionsGroup> {
    return this.descriptionsGroupRepository.findOne({ where: { id } });
  }

  async updateDescriptionsGroup(id: number, data: Partial<DescriptionsGroup>): Promise<DescriptionsGroup> {
    await this.descriptionsGroupRepository.update(id, data);
    return this.descriptionsGroupRepository.findOne({ where: { id } });
  }

  async deleteDescriptionsGroup(id: number): Promise<void> {
    await this.descriptionsGroupRepository.delete(id);
  }
}
