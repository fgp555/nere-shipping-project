// src/entities/Containers.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Report } from './Report.entity';
import { RelevantTimes } from './RelevantTimes.entity';
import { SecuringSeals } from './SecuringSeals.entity';

@Entity('t6_containers_entity')
export class Container {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'container_code', type: 'varchar', length: 255 })
  containerCode: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @ManyToOne(() => Report, (report) => report.containers)
  reports: Report;

  @ManyToOne(() => RelevantTimes, (times) => times.containers)
  relevantTimes: RelevantTimes[];

  @ManyToOne(() => SecuringSeals, (seals) => seals.containers)
  securingSeals: SecuringSeals;
}
