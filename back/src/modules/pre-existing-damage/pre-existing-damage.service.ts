import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PreExistingDamage } from '../../entities/PreExistingDamage.entity';

@Injectable()
export class PreExistingDamageService {
  constructor(
    @InjectRepository(PreExistingDamage)
    private readonly preExistingDamageRepository: Repository<PreExistingDamage>,
  ) {}

  async createPreExistingDamage(data: Partial<PreExistingDamage>): Promise<PreExistingDamage> {
    const preExistingDamage = this.preExistingDamageRepository.create(data);
    return this.preExistingDamageRepository.save(preExistingDamage);
  }

  async findAllPreExistingDamages(): Promise<PreExistingDamage[]> {
    return this.preExistingDamageRepository.find();
  }

  async findPreExistingDamageById(id: number): Promise<PreExistingDamage> {
    return this.preExistingDamageRepository.findOne({ where: { id } });
  }

  async updatePreExistingDamage(id: number, data: Partial<PreExistingDamage>): Promise<PreExistingDamage> {
    await this.preExistingDamageRepository.update(id, data);
    return this.preExistingDamageRepository.findOne({ where: { id } });
  }

  async deletePreExistingDamage(id: number): Promise<void> {
    await this.preExistingDamageRepository.delete(id);
  }
}
