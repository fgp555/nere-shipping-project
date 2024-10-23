// src/entities/RelevantTimes.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Container } from './Containers.entity';
import { DetailsShipment } from './DetailsShipment.entity';

@Entity('t2_relevant_times_entity')
export class RelevantTimes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @OneToMany(() => Container, (container) => container.relevantTimes, { eager: true })
  @JoinColumn({ name: 'container_id' })
  containers: Container;

  @Column({ name: 'qty_of_pkgs', type: 'int' })
  qtyOfPkgs: number;

  @Column({ type: 'time' })
  start: string;

  @Column({ type: 'time' })
  complete: string;

  @Column({ name: 'time_used_to_survey', type: 'time' })
  timeUsedToSurvey: string;

  @ManyToOne(() => DetailsShipment, (details) => details.relevantTimes, { eager: true })
  @JoinColumn({ name: 'details_shipment_id' })
  detailsShipment: DetailsShipment;
}
