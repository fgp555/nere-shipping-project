import { ReportEntity } from 'src/module/report/entities/report.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('t5_damage')
export class T5DamageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  notes: string[];

  @ManyToOne(() => ReportEntity, (report) => report.t5_damage)
  report_mbl_code: ReportEntity;
}
