import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Report } from './report.entity';

@Entity()
export class RelevantTimes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  container_code: string;

  @Column()
  qty_of_pkgs: number;

  @ManyToOne(() => Report, (report) => report.T2_relevant_times)
  report: Report;
}
