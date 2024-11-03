// back/src/module/t4_unstuffing/t4_unstuffing.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateT4UnstuffingDto } from './dto/create-t4_unstuffing.dto';
import { UpdateT4UnstuffingDto } from './dto/update-t4_unstuffing.dto';
import { T4UnstuffingEntity } from './entities/t4_unstuffing.entity';
import { ImageGroupEntity } from '../image/image-group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportEntity } from '../report/entities/report.entity';

@Injectable()
export class T4UnstuffingService {
  constructor(
    @InjectRepository(T4UnstuffingEntity)
    private readonly t4Unstuffing: Repository<T4UnstuffingEntity>,

    @InjectRepository(ReportEntity)
    private reportRepository: Repository<ReportEntity>,
  ) {}

  async create(
    createReportDto: CreateT4UnstuffingDto,
    imagesGroups: { [key: string]: string[] },
    notesGroups: { [key: string]: string[] },
    mbl_code: string, // Añade este parámetro para recibir el mbl_code
  ): Promise<T4UnstuffingEntity> {
    const { notes, foot_note } = createReportDto;

    // Busca el ReportEntity usando el mbl_code
    const foundReport = await this.reportRepository.findOne({
      where: { mbl_code },
    });
    if (!foundReport) {
      throw new NotFoundException('Report not found');
    }

    const t4Unstuffing = new T4UnstuffingEntity();
    t4Unstuffing.notes = notes;
    t4Unstuffing.foot_note = foot_note;
    t4Unstuffing.report_mbl_code = foundReport; // Establece la relación

    // Procesa los grupos de imágenes
    t4Unstuffing.images_groups = Object.keys(imagesGroups).map((groupName) => {
      const imageGroup = new ImageGroupEntity();
      imageGroup.group_name = groupName;
      imageGroup.images = imagesGroups[groupName];
      imageGroup.images_notes = notesGroups[groupName] || [];
      return imageGroup;
    });

    return await this.t4Unstuffing.save(t4Unstuffing);
  }

  findAll() {
    return this.t4Unstuffing.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} t4Unstuffing`;
  }

  update(id: number, updateT4UnstuffingDto: UpdateT4UnstuffingDto) {
    return `This action updates a #${id} t4Unstuffing`;
  }

  remove(id: number) {
    return `This action removes a #${id} t4Unstuffing`;
  }
}
