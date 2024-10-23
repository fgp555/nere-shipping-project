import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Container } from '../../entities/Containers.entity';

@Injectable()
export class ContainersService {
  constructor(
    @InjectRepository(Container)
    private readonly containersRepository: Repository<Container>,
  ) {}

  async createContainer(data: Partial<Container>): Promise<Container> {
    const container = this.containersRepository.create(data);
    return this.containersRepository.save(container);
  }

  async findAllContainers(): Promise<Container[]> {
    return this.containersRepository.find();
  }

  async findContainerById(id: number): Promise<Container> {
    return this.containersRepository.findOne({ where: { id } });
  }

  async updateContainer(id: number, data: Partial<Container>): Promise<Container> {
    await this.containersRepository.update(id, data);
    return this.containersRepository.findOne({ where: { id } });
  }

  async deleteContainer(id: number): Promise<void> {
    await this.containersRepository.delete(id);
  }
}
