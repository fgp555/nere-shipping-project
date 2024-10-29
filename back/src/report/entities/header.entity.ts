import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Report } from './report.entity';

@Entity()
export class Header {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  header_name: string;

  @Column()
  header_address: string;

  @Column()
  header_mobile: string;

  @Column()
  header_email: string;

  @Column("simple-array")
  container_code: string[];

  @OneToOne(() => Report, (report) => report.t0_header)
  report: Report;
}
