// src/entities/UnstuffingContainer.entity.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Description } from './Description.entity';
import { DetailsShipment } from './DetailsShipment.entity';

@Entity('t4_unstuffing_container_entity')
export class UnstuffingContainer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Description, (description) => description.unstuffingContainers, { eager: true, onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'description_id' })
  descriptions: Description[];

  @ManyToOne(() => DetailsShipment, (details) => details.unstuffingContainers, { eager: true })
  @JoinColumn({ name: 'details_shipment_id' })
  detailsShipment: DetailsShipment;
}
