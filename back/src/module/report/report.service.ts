import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async findOne(mbl_code: string) {
    const report = await this.reportRepository.findOne({ where: { mbl_code } });
    if (!report) throw new NotFoundException('Report not found');
    return report;
  }

  async dowloadTest() {
    // return await this.reportRepository.findOne({ where: { mbl_code } });
    return `This action downloads a # report`;
  }

  async download(mbl_code: string) {
    // return await this.reportRepository.findOne({ where: { mbl_code } });
    return `This action downloads a #${mbl_code} report`;
  }

  async mbl_code() {
    const reports = await this.reportRepository
      .createQueryBuilder('report')
      .select('report.mbl_code')
      .getRawMany();

    return reports;
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  async remove(mbl_code: string) {
    // Busca el reporte junto con sus relaciones, para que TypeORM aplique la cascada
    const report = await this.reportRepository.findOne({
      where: { mbl_code: mbl_code },
      relations: [
        't0_header',
        't1_details_shipment',
        'T2_relevant_times',
        't3_securing_seals',
        't4_unstuffing',
        't5_damage',
        't6_footer',
      ],
    });

    if (!report) {
      throw new NotFoundException(`Report with ID ${mbl_code} not found`);
    }

    // Usa el método remove en lugar de delete para activar la eliminación en cascada
    return await this.reportRepository.remove(report);
  }
}
