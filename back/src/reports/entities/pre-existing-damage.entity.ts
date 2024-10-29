import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Report } from './report.entity';

@Entity()
export class PreExistingDamage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("simple-array")
  notes: string[];

  @Column("json", { nullable: true })
  damages: {
    title: string;
    b_l_no: string;
    consignee: string;
    marks: string;
    qty_of_pkgs: number;
    goods: string;
    remarks: string;
    images: { path: string; description: string }[];
  }[];

  @OneToOne(() => Report, (report) => report.t5_pre_existing_damage)
  report: Report;
}
