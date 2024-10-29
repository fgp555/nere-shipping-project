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

  async createPlain(createReportDto: CreateReportDto): Promise<Report> {
    const report = this.reportRepository.create(createReportDto);
    return await this.reportRepository.save(report);
  }

  async create(
    createReportDto: CreateReportDto,
    files: {
      't4_unstuffing_container[image]'?: Express.Multer.File[];
      't5_pre_existing_damage[image]'?: Express.Multer.File[];
    },
  ): Promise<Report> {
    // Procesar imágenes de t4_unstuffing_container
    if (
      files['t4_unstuffing_container[image]'] &&
      files['t4_unstuffing_container[image]'].length > 0
    ) {
      createReportDto.t4_unstuffing_container = {
        ...createReportDto.t4_unstuffing_container,
        images: files['t4_unstuffing_container[image]'].map((file) => ({
          path: file.path,
          description:
            createReportDto.t4_unstuffing_container?.images?.[0]?.description ||
            'No description provided',
        })),
      };
    }

    // Procesar imágenes de t5_pre_existing_damage
    if (
      files['t5_pre_existing_damage[image]'] &&
      files['t5_pre_existing_damage[image]'].length > 0 &&
      createReportDto.t5_pre_existing_damage?.damages
    ) {
      createReportDto.t5_pre_existing_damage.damages =
        createReportDto.t5_pre_existing_damage.damages.map((damage, index) => {
          damage.images = files['t5_pre_existing_damage[image]'].map(
            (file) => ({
              path: file.path,
              description:
                damage.images?.[0]?.description || 'No description provided',
            }),
          );
          return damage;
        });
    }

    // Crear y guardar el reporte con el DTO actualizado
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
