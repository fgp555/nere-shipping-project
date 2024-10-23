import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Containers } from '../../entities/Containers.entity';

@Injectable()
export class ContainersService {
  constructor(
    @InjectRepository(Containers)
    private readonly containersRepository: Repository<Containers>,
  ) {}

  async createContainer(data: Partial<Containers>): Promise<Containers> {
    const container = this.containersRepository.create(data);
    return this.containersRepository.save(container);
  }

  async findAllContainers(): Promise<Containers[]> {
    return this.containersRepository.find();
  }

  async findContainerById(id: number): Promise<Containers> {
    return this.containersRepository.findOne({ where: { id } });
  }

  async updateContainer(id: number, data: Partial<Containers>): Promise<Containers> {
    await this.containersRepository.update(id, data);
    return this.containersRepository.findOne({ where: { id } });
  }

  async deleteContainer(id: number): Promise<void> {
    await this.containersRepository.delete(id);
  }
}
