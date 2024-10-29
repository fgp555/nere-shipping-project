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

  @Column({ nullable: true })
  start: string;

  @Column({ nullable: true })
  complete: string;

  @Column({ nullable: true })
  time_used_to_survey: string;

  @ManyToOne(() => Report, (report) => report.T2_relevant_times)
  report: Report;
}
