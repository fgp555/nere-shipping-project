import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportEntity } from './entities/report.entity';
import { Repository } from 'typeorm';
import { ImageGroupEntity } from './entities/image-group.entity';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(ReportEntity)
    private readonly reportRepository: Repository<ReportEntity>,
  ) {}

  async create(
    createReportDto: CreateReportDto,
    imagesGroups: { [key: string]: string[] },
    notesGroups: { [key: string]: string[] },
  ): Promise<ReportEntity> {
    const { notes, foot_note } = createReportDto;

    const report = new ReportEntity();
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

    return await this.reportRepository.save(report);
  }

  async findAll() {
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
