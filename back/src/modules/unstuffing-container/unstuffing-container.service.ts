import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnstuffingContainer } from '../../entities/UnstuffingContainer.entity';

@Injectable()
export class UnstuffingContainerService {
  constructor(
    @InjectRepository(UnstuffingContainer)
    private readonly unstuffingContainerRepository: Repository<UnstuffingContainer>,
  ) {}

  async createUnstuffingContainer(data: Partial<UnstuffingContainer>): Promise<UnstuffingContainer> {
    const unstuffingContainer = this.unstuffingContainerRepository.create(data);
    return this.unstuffingContainerRepository.save(unstuffingContainer);
  }

  async findAllUnstuffingContainers(): Promise<UnstuffingContainer[]> {
    return this.unstuffingContainerRepository.find();
  }

  async findUnstuffingContainerById(id: number): Promise<UnstuffingContainer> {
    return this.unstuffingContainerRepository.findOne({ where: { id } });
  }

  async updateUnstuffingContainer(id: number, data: Partial<UnstuffingContainer>): Promise<UnstuffingContainer> {
    await this.unstuffingContainerRepository.update(id, data);
    return this.unstuffingContainerRepository.findOne({ where: { id } });
  }

  async deleteUnstuffingContainer(id: number): Promise<void> {
    await this.unstuffingContainerRepository.delete(id);
  }
}
