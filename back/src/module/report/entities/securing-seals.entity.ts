import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ReportEntity } from './report.entity';

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
  
  @Column()
  argentinean_customs_seal: string;
  
  @Column()
  others: string;

  @ManyToOne(() => ReportEntity, (report) => report.t3_securing_seals)
  report: ReportEntity;
}
