import { ConflictException, Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportEntity } from './entities/report.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(ReportEntity)
    private reportRepository: Repository<ReportEntity>,
  ) {}

  async create(createReportDto: any) {
    const existingReport = await this.reportRepository.findOne({
      where: {
        mbl_code: createReportDto.mbl_code,
      },
    });

    if (existingReport) throw new ConflictException('El reporte ya existe');

    return await this.reportRepository.save(createReportDto);
  }

  findAll() {
    return this.reportRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} report`;
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  remove(id: number) {
    return `This action removes a #${id} report`;
  }
}