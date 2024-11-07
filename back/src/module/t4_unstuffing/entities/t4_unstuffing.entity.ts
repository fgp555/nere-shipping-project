// back/src/module/t4_unstuffing/entities/t4_unstuffing.entity.ts

import { ImageGroupEntity } from 'src/module/image/image-group.entity';
import { ReportEntity } from 'src/module/report/entities/report.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('T4Unstuffing')
export class T4UnstuffingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json') // Cambia a json para almacenar el array
  notes: string[];

  @Column('text')
  foot_note: string;

  @OneToMany(() => ImageGroupEntity, (imageGroup) => imageGroup.unstuffing, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  images_groups: ImageGroupEntity[];

  @ManyToOne(() => ReportEntity, (report) => report.t4_unstuffing)
  report_mbl_code: ReportEntity;
}
