import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Description } from '../../entities/Description.entity';

@Injectable()
export class DescriptionService {
  constructor(
    @InjectRepository(Description)
    private readonly descriptionRepository: Repository<Description>,
  ) {}

  async createDescription(data: Partial<Description>): Promise<Description> {
    const description = this.descriptionRepository.create(data);
    return this.descriptionRepository.save(description);
  }

  async findAllDescriptions(): Promise<Description[]> {
    return this.descriptionRepository.find();
  }

  async findDescriptionById(id: number): Promise<Description> {
    return this.descriptionRepository.findOne({ where: { id } });
  }

  async updateDescription(id: number, data: Partial<Description>): Promise<Description> {
    await this.descriptionRepository.update(id, data);
    return this.descriptionRepository.findOne({ where: { id } });
  }

  async deleteDescription(id: number): Promise<void> {
    await this.descriptionRepository.delete(id);
  }
}
