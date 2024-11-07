// back/src/module/t5_damage/entities/t5_damage.entity.ts

import { ReportEntity } from 'src/module/report/entities/report.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { T5ImageGroupEntity } from './t5_image-group.entity';

@Entity('T5Damage')
export class T5DamageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json', { nullable: true })
  notes: string[];

  @Column('text', { nullable: true })
  foot_note: string;

  @OneToMany(() => T5ImageGroupEntity, (imageGroup) => imageGroup.damage, {
    cascade: true,
    eager: true,
  })
  images_groups: T5ImageGroupEntity[];

  @ManyToOne(() => ReportEntity, (report) => report.t5_damage)
  report_mbl_code: ReportEntity;
}
