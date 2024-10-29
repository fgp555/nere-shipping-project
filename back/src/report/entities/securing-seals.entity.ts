import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Report } from './report.entity';

@Entity()
export class SecuringSeals {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  container_code: string;

  @Column()
  type: string;

  @Column()
  wwas_safety_seals: string;

  @ManyToOne(() => Report, (report) => report.t3_securing_seals)
  report: Report;
}
