// src/entities/RelevantTimes.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Containers } from './Containers.entity';
import { DetailsShipment } from './DetailsShipment.entity';

@Entity('t2_relevant_times_entity')
export class RelevantTimes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @ManyToOne(() => Containers, (container) => container.relevantTimes, { eager: true })
  @JoinColumn({ name: 'container_id' })
  container: Containers;

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
