import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './entities/report.entity';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { log } from 'console';

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
    console.log('createReportDto: ', createReportDto);
    // console.log('files: ', files);

    // Manejo de archivos para `t4_unstuffing_container`
    if (
      files['t4_unstuffing_container[image]'] &&
      files['t4_unstuffing_container[image]'].length > 0
    ) {
      if (!createReportDto.t4_unstuffing_container) {
        createReportDto.t4_unstuffing_container = {
          notes: [],
          images: [],
          foot_note: '',
        };
      }
      createReportDto.t4_unstuffing_container.images = files[
        't4_unstuffing_container[image]'
      ].map((file) => ({
        path: file.path,
        description: 'No description provided',
      }));
    }

    // Manejo de archivos para `t5_pre_existing_damage`
    if (
      files['t5_pre_existing_damage[image]'] &&
      files['t5_pre_existing_damage[image]'].length > 0
    ) {
      if (!createReportDto.t5_pre_existing_damage) {
        createReportDto.t5_pre_existing_damage = { notes: [], damages: [] };
      }

      // Verifica si `damages` está definido y es un array
      if (!Array.isArray(createReportDto.t5_pre_existing_damage.damages)) {
        createReportDto.t5_pre_existing_damage.damages = [];
      }

      // Si `damages` está vacío, inicializa al menos un objeto de daño
      if (createReportDto.t5_pre_existing_damage.damages.length === 0) {
        createReportDto.t5_pre_existing_damage.damages.push({
          title: '',
          b_l_no: '',
          consignee: '',
          marks: '',
          qty_of_pkgs: 0,
          goods: '',
          remarks: '',
          images: [],
        });
      }

      // Asigna las imágenes a cada objeto en `damages`
      createReportDto.t5_pre_existing_damage.damages =
        createReportDto.t5_pre_existing_damage.damages.map((damage) => {
          damage.images = files['t5_pre_existing_damage[image]'].map(
            (file) => ({
              path: file.path,
              description: 'No description provided',
            }),
          );
          return damage;
        });
    }

    // Guarda el reporte en la base de datos
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
