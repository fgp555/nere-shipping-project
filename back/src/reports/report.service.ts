import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './entities/report.entity';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
  ) {}

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const report = this.reportRepository.create(createReportDto);
    return await this.reportRepository.save(report);
  }

  async findAll(): Promise<Report[]> {
    return await this.reportRepository.find({
      relations: [
        't0_header',
        't1_details_shipment',
        'T2_relevant_times',
        't3_securing_seals',
        't4_unstuffing_container',
        't5_pre_existing_damage',
        't6_the_weather',
        't7_footer',
      ],
    });
  }

  async findOne(id: number): Promise<Report> {
    return await this.reportRepository.findOne({
      where: { id },
      relations: [
        't0_header',
        't1_details_shipment',
        'T2_relevant_times',
        't3_securing_seals',
        't4_unstuffing_container',
        't5_pre_existing_damage',
        't6_the_weather',
        't7_footer',
      ],
    });
  }

  async update(id: number, updateReportDto: UpdateReportDto): Promise<Report> {
    await this.reportRepository.update(id, updateReportDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.reportRepository.delete(id);
  }
}
