// src/entities/Containers.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Report } from './Report.entity';
import { RelevantTimes } from './RelevantTimes.entity';
import { SecuringSeals } from './SecuringSeals.entity';

@Entity('t6_containers_entity')
export class Containers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'container_code', type: 'varchar', length: 255 })
  containerCode: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @OneToMany(() => Report, (report) => report.container)
  reports: Report[];

  @OneToMany(() => RelevantTimes, (times) => times.container)
  relevantTimes: RelevantTimes[];

  @OneToMany(() => SecuringSeals, (seals) => seals.container)
  securingSeals: SecuringSeals[];
}
