// back/src/module/t4_unstuffing/t4_unstuffing.service.ts

import { Injectable } from '@nestjs/common';
import { CreateT4UnstuffingDto } from './dto/create-t4_unstuffing.dto';
import { UpdateT4UnstuffingDto } from './dto/update-t4_unstuffing.dto';
import { T4UnstuffingEntity } from './entities/t4_unstuffing.entity';
import { ImageGroupEntity } from '../image/image-group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class T4UnstuffingService {
  constructor(
    @InjectRepository(T4UnstuffingEntity)
    private readonly t4Unstuffing: Repository<T4UnstuffingEntity>,
  ) {}

  async create(
    createReportDto: CreateT4UnstuffingDto,
    imagesGroups: { [key: string]: string[] },
    notesGroups: { [key: string]: string[] },
  ): Promise<T4UnstuffingEntity> {
    const { notes, foot_note } = createReportDto;

    const report = new T4UnstuffingEntity();
    report.notes = notes;
    report.foot_note = foot_note;

    // Procesa los grupos de imágenes
    report.images_groups = Object.keys(imagesGroups).map((groupName) => {
      const imageGroup = new ImageGroupEntity();
      imageGroup.group_name = groupName;
      imageGroup.images = imagesGroups[groupName];
      imageGroup.images_notes = notesGroups[groupName] || [];
      return imageGroup;
    });

    return await this.t4Unstuffing.save(report);
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
