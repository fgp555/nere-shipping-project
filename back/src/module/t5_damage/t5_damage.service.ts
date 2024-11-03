import { Injectable, NotFoundException } from '@nestjs/common';
import { T5DamageEntity } from './entities/t5_damage.entity';
import { T5ImageGroupEntity } from './entities/t5_image-group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportEntity } from '../report/entities/report.entity';

@Injectable()
export class T5DamageService {
  constructor(
    @InjectRepository(T5DamageEntity)
    private readonly t5DamageRepository: Repository<T5DamageEntity>,

    @InjectRepository(ReportEntity)
    private reportRepository: Repository<ReportEntity>,
  ) {}

  async create(
    createReportDto: any,
    mbl_code: string,
    files: Express.Multer.File[],
  ): Promise<T5DamageEntity> {
    const { notes, images_groups } = createReportDto;

    const foundReport = await this.reportRepository.findOne({
      where: { mbl_code },
    });
    if (!foundReport) {
      throw new NotFoundException('Report not found');
    }

    const t5Damage = new T5DamageEntity();
    t5Damage.notes = notes;
    t5Damage.report_mbl_code = foundReport;

    const groupedFiles = files.reduce((acc, file) => {
      const groupName = file.fieldname.split('_files')[0];
      if (!acc[groupName]) acc[groupName] = [];
      acc[groupName].push(`/uploads/t5_damage/${file.filename}`);
      return acc;
    }, {});

    t5Damage.images_groups = images_groups.map((groupData) => {
      const imageGroup = new T5ImageGroupEntity();
      imageGroup.group_name = groupData.group_name;
      imageGroup.title = groupData.title;
      imageGroup.b_l_no = groupData.b_l_no;
      imageGroup.consignee = groupData.consignee;
      imageGroup.marks = groupData.marks;
      imageGroup.qty_of_pkgs = groupData.qty_of_pkgs;
      imageGroup.goods = groupData.goods;
      imageGroup.remarks = groupData.remarks;
      imageGroup.images = groupedFiles[groupData.group_name] || [];
      imageGroup.images_notes = groupData.images_notes;
      return imageGroup;
    });

    return await this.t5DamageRepository.save(t5Damage);
  }

  findAll() {
    return this.t5DamageRepository.find();
  }

  remove(id: number) {
    return this.t5DamageRepository.delete(id);
  }
}
