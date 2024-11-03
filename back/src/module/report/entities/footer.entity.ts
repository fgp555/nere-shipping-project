import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ReportEntity } from './report.entity';

@Entity()
export class FooterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  weather_status: string;

  @Column()
  legend: string;

  @Column()
  who_signs: string;

  @Column()
  cargo: string;

  @OneToOne(() => ReportEntity, (report) => report.t6_footer)
  report: ReportEntity;
}
