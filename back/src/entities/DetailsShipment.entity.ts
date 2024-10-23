// src/entities/DetailsShipment.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UnstuffingContainer } from './UnstuffingContainer.entity';
import { PreExistingDamage } from './PreExistingDamage.entity';
import { Report } from './Report.entity';
import { RelevantTimes } from './RelevantTimes.entity';
import { SecuringSeals } from './SecuringSeals.entity';

@Entity('t1_details_shipment_entity')
export class DetailsShipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  vessel: string;

  @Column({ type: 'varchar', length: 255 })
  voyage: string;

  @Column({ name: 'mbl_code', type: 'varchar', length: 255 })
  mblCode: string;

  @Column({ type: 'varchar', length: 255 })
  pol: string;

  @Column({ type: 'varchar', length: 255 })
  shipper: string;

  @Column({ type: 'varchar', length: 255 })
  pod: string;

  @Column({ type: 'varchar', length: 255 })
  consignee: string;

  @Column({ name: 'qty_of_pkgs', type: 'int' })
  qtyOfPkgs: number;

  @Column({ type: 'varchar', length: 255 })
  goods: string;

  @Column({ name: 'gross_weight', type: 'varchar', length: 255 })
  grossWeight: string;

  @OneToMany(() => UnstuffingContainer, (unstuffing) => unstuffing.detailsShipment)
  unstuffingContainers: UnstuffingContainer[];

  @OneToMany(() => PreExistingDamage, (damage) => damage.detailsShipment)
  preExistingDamages: PreExistingDamage[];

  @OneToMany(() => Report, (report) => report.detailsShipment)
  reports: Report[];

  @OneToMany(() => RelevantTimes, (times) => times.detailsShipment)
  relevantTimes: RelevantTimes[];

  @OneToMany(() => SecuringSeals, (seals) => seals.detailsShipment)
  securingSeals: SecuringSeals[];
}
