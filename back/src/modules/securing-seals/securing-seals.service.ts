import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SecuringSeals } from '../../entities/SecuringSeals.entity';

@Injectable()
export class SecuringSealsService {
  constructor(
    @InjectRepository(SecuringSeals)
    private readonly securingSealsRepository: Repository<SecuringSeals>,
  ) {}

  async createSecuringSeal(data: Partial<SecuringSeals>): Promise<SecuringSeals> {
    const securingSeal = this.securingSealsRepository.create(data);
    return this.securingSealsRepository.save(securingSeal);
  }

  async findAllSecuringSeals(): Promise<SecuringSeals[]> {
    return this.securingSealsRepository.find();
  }

  async findSecuringSealById(id: number): Promise<SecuringSeals> {
    return this.securingSealsRepository.findOne({ where: { id } });
  }

  async updateSecuringSeal(id: number, data: Partial<SecuringSeals>): Promise<SecuringSeals> {
    await this.securingSealsRepository.update(id, data);
    return this.securingSealsRepository.findOne({ where: { id } });
  }

  async deleteSecuringSeal(id: number): Promise<void> {
    await this.securingSealsRepository.delete(id);
  }
}
