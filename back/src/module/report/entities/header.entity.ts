import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { ReportEntity } from './report.entity';
// import { Report } from './report.entity';

@Entity()
export class HeaderEntity {
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

  @Column()
  containers_descripcion: string;

  @Column()
  containers_destino: string;

  @Column({ type: 'text' })
  report_description: string;

  @Column({ type: 'text' })
  report_note: string;

  @OneToOne(() => ReportEntity, (report) => report.t0_header, {
    // onDelete: 'CASCADE',
  })
  report: ReportEntity;
}
