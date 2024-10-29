import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Report } from './report.entity';

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("simple-array")
  notes: string[];

  @Column()
  temperature: number;

  @Column()
  humidity: number;

  @OneToOne(() => Report, (report) => report.t6_the_weather)
  report: Report;
}
