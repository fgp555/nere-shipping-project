// src/entities/PreExistingDamage.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { DetailsShipment } from './DetailsShipment.entity';
import { DescriptionsGroup } from './DescriptionsGroup.entity';

@Entity('t5_pre_existing_damage_entity')
export class PreExistingDamage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'b_l_no', type: 'varchar', length: 255 })
  blNo: string;

  @Column({ type: 'varchar', length: 255 })
  consignee: string;

  @Column({ type: 'varchar', length: 255 })
  marks: string;

  @Column({ name: 'qty_of_pkgs', type: 'int' })
  qtyOfPkgs: number;

  @Column({ type: 'varchar', length: 255 })
  goods: string;

  @Column({ type: 'text' })
  remarks: string;

  @ManyToOne(
    () => DescriptionsGroup,
    (description) => description.preExistingDamages,
    { eager: true },
  )
  @JoinColumn({ name: 'damage_description_id' })
  descriptionsGroup: DescriptionsGroup[];
  // @Column()
  // descriptions: string;

  @ManyToOne(() => DetailsShipment, (details) => details.preExistingDamages, {
    eager: true,
  })
  @JoinColumn({ name: 'details_shipment_id' })
  detailsShipment: DetailsShipment;
}
