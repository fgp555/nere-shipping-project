import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Report } from './report.entity';

@Entity()
export class UnstuffingContainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("simple-array")
  notes: string[];

  @Column("json", { nullable: true })
  images: { path: string; description: string }[];

  @Column()
  foot_note: string;

  @OneToOne(() => Report, (report) => report.t4_unstuffing_container)
  report: Report;
}
