import { Injectable } from '@nestjs/common';
import { CreateT5DamageDto } from './dto/create-t5_damage.dto';
import { UpdateT5DamageDto } from './dto/update-t5_damage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { T5DamageEntity } from './entities/t5_damage.entity';
import { Repository } from 'typeorm';
import { ReportEntity } from '../report/entities/report.entity';

@Injectable()
export class T5DamageService {
  constructor(
    @InjectRepository(T5DamageEntity)
    private t5DamageRepository: Repository<T5DamageEntity>,

    @InjectRepository(ReportEntity)
    private reportRepository: Repository<ReportEntity>,
  ) {}

  async create(createT5DamageDto: any) {
    const foundReport = await this.reportRepository.findOne({
      where: {
        mbl_code: createT5DamageDto.report_mbl_code,
      },
    });
    const createdT5Damage = this.t5DamageRepository.create({
      ...createT5DamageDto,
      report_mbl_code: foundReport,
    });
    const savedT5Damage = await this.t5DamageRepository.save(createdT5Damage);
    return savedT5Damage;
  }

  findAll() {
    return this.t5DamageRepository.find();
  }

  async findOne(id: number) {
    return await this.t5DamageRepository.findOne({ where: { id } });
  }

  async update(id: number, updateT5DamageDto: UpdateT5DamageDto) {
    await this.t5DamageRepository.update(id, updateT5DamageDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const record = await this.findOne(id);
    await this.t5DamageRepository.delete(id);
    return record;
  }
}
