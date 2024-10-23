// src/entities/Report.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Containers } from './Containers.entity';
import { DetailsShipment } from './DetailsShipment.entity';

@Entity('t0_report_entity')
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'header_name', type: 'varchar', length: 255 })
  headerName: string;

  @Column({ name: 'header_address', type: 'varchar', length: 255 })
  headerAddress: string;

  @Column({ name: 'header_mobile', type: 'varchar', length: 255 })
  headerMobile: string;

  @Column({ name: 'header_email', type: 'varchar', length: 255 })
  headerEmail: string;

  @Column({ name: 'report_date', type: 'date' })
  reportDate: Date;

  @Column({ name: 'cliente_senores', type: 'varchar', length: 255 })
  clienteSenores: string;

  @Column({ name: 'cliente_empresa', type: 'varchar', length: 255 })
  clienteEmpresa: string;

  @Column({ name: 'cliente_deposito', type: 'varchar', length: 255 })
  clienteDeposito: string;

  @Column({ name: 'cliente_postal', type: 'varchar', length: 255 })
  clientePostal: string;

  @Column({ name: 'operador_area', type: 'varchar', length: 255 })
  operadorArea: string;

  @Column({ name: 'operador_responsables1', type: 'varchar', length: 255 })
  operadorResponsables1: string;

  @Column({ name: 'operador_responsables2', type: 'varchar', length: 255 })
  operadorResponsables2: string;

  @Column({ name: 'report_mv', type: 'varchar', length: 255 })
  reportMv: string;

  @Column({ name: 'containers_reporte', type: 'varchar', length: 255 })
  containersReporte: string;

  @Column({ name: 'containers_leyenda', type: 'varchar', length: 255 })
  containersLeyenda: string;

  @ManyToOne(() => Containers, (container) => container.reports, {
    eager: true,
  })
  @JoinColumn({ name: 'container_id' })
  container: Containers;

  @Column({ name: 'containers_descripcion', type: 'varchar', length: 255 })
  containersDescripcion: string;

  @Column({ name: 'containers_destino', type: 'varchar', length: 255 })
  containersDestino: string;

  @Column({ name: 'report_description', type: 'text' })
  reportDescription: string;

  @Column({ name: 'report_note', type: 'text' })
  reportNote: string;

  @ManyToOne(() => DetailsShipment, (details) => details.reports, {
    eager: true,
  })
  @JoinColumn({ name: 'details_shipment_id' })
  detailsShipment: DetailsShipment;
}
