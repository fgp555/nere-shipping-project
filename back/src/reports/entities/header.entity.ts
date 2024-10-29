import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Report } from './report.entity';

@Entity()
export class Header {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  header_name: string;

  @Column()
  header_address: string;

  @Column()
  header_mobile: string;

  @Column()
  header_email: string;

  @OneToOne(() => Report, (report) => report.t0_header)
  report: Report;

  @Column()
  report_date: string;

  @Column()
  cliente_senores: string;

  @Column()
  cliente_empresa: string;

  @Column()
  cliente_deposito: string;

  @Column()
  cliente_postal: string;

  @Column()
  operador_area: string;

  @Column()
  operador_responsables1: string;

  @Column()
  operador_responsables2: string;

  @Column()
  report_mv: string;

  @Column()
  containers_reporte: string;

  @Column()
  containers_leyenda: string;

  @Column('simple-array', { nullable: true })
  containers_code: string[];

  @Column('simple-array')
  container_code: string[];

  @Column()
  containers_descripcion: string;

  @Column()
  containers_destino: string;

  @Column({ type: 'text' })
  report_description: string;

  @Column({ type: 'text' })
  report_note: string;
}
