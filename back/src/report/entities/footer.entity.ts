import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Report } from './report.entity';

@Entity()
export class Footer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("simple-array")
  notes: string[];

  @OneToOne(() => Report, (report) => report.t7_footer)
  report: Report;
}
