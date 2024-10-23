import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RelevantTimes } from '../../entities/RelevantTimes.entity';

@Injectable()
export class RelevantTimesService {
  constructor(
    @InjectRepository(RelevantTimes)
    private readonly relevantTimesRepository: Repository<RelevantTimes>,
  ) {}

  async createRelevantTimes(data: Partial<RelevantTimes>): Promise<RelevantTimes> {
    const relevantTimes = this.relevantTimesRepository.create(data);
    return this.relevantTimesRepository.save(relevantTimes);
  }

  async findAllRelevantTimes(): Promise<RelevantTimes[]> {
    return this.relevantTimesRepository.find();
  }

  async findRelevantTimesById(id: number): Promise<RelevantTimes> {
    return this.relevantTimesRepository.findOne({ where: { id } });
  }

  async updateRelevantTimes(id: number, data: Partial<RelevantTimes>): Promise<RelevantTimes> {
    await this.relevantTimesRepository.update(id, data);
    return this.relevantTimesRepository.findOne({ where: { id } });
  }

  async deleteRelevantTimes(id: number): Promise<void> {
    await this.relevantTimesRepository.delete(id);
  }
}
