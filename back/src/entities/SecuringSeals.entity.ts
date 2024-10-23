// src/entities/SecuringSeals.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Containers } from './Containers.entity';
import { DetailsShipment } from './DetailsShipment.entity';

@Entity('t3_securing_seals_entity')
export class SecuringSeals {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Containers, (container) => container.securingSeals, { eager: true })
  @JoinColumn({ name: 'container_id' })
  container: Containers;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ name: 'wwas_safety_seals', type: 'varchar', length: 255 })
  wwasSafetySeals: string;

  @Column({ name: 'argentinean_customs_seal', type: 'varchar', length: 255 })
  argentineanCustomsSeal: string;

  @Column({ type: 'varchar', length: 255 })
  others: string;

  @ManyToOne(() => DetailsShipment, (details) => details.securingSeals, { eager: true })
  @JoinColumn({ name: 'details_shipment_id' })
  detailsShipment: DetailsShipment;
}
