import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { ReportEntity } from './report.entity';

@Entity()
export class DetailsShipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vessel: string;

  @Column()
  voyage: string;

  @Column()
  mbl_code: string;

  @Column()
  pol: string;

  @Column()
  shipper: string;

  @Column()
  pod: string;

  @Column()
  consignee: string;

  @Column({ type: 'int' })
  qty_of_pkgs: number;

  @Column()
  goods: string;

  @Column()
  gross_weight: string;

  @OneToOne(() => ReportEntity, (report) => report.t1_details_shipment, {
    onDelete: 'CASCADE',
  })
  report: ReportEntity;
}
