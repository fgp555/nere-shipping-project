import { T4UnstuffingEntity } from 'src/module/t4_unstuffing/entities/t4_unstuffing.entity';
import { T5DamageEntity } from 'src/module/t5_damage/entities/t5_damage.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { HeaderEntity } from './header.entity';
import { DetailsShipment } from './details-shipment.entity';
import { RelevantTimes } from './relevant-times.entity';
import { SecuringSeals } from './securing-seals.entity';
import { FooterEntity } from './footer.entity';

@Entity('reports')
export class ReportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  mbl_code: string;

  @OneToOne(() => HeaderEntity, (header) => header.report, {
    cascade: true,
    eager: true,
    // onDelete: 'CASCADE',
  })
  @JoinColumn()
  t0_header: HeaderEntity;

  @OneToOne(() => DetailsShipment, (details) => details.report, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  t1_details_shipment: DetailsShipment;

  @OneToMany(() => RelevantTimes, (times) => times.report, {
    cascade: true,
    eager: true,
  })
  T2_relevant_times: RelevantTimes[];

  @OneToMany(() => SecuringSeals, (seals) => seals.report, {
    cascade: true,
    eager: true,
  })
  t3_securing_seals: SecuringSeals[];

  @OneToMany(
    () => T4UnstuffingEntity,
    (t5_damage) => t5_damage.report_mbl_code,
    {
      cascade: true,
      eager: true,
    },
  )
  t4_unstuffing: T4UnstuffingEntity[];

  @OneToMany(() => T5DamageEntity, (t5_damage) => t5_damage.report_mbl_code, {
    cascade: true,
    eager: true,
  })
  t5_damage: T5DamageEntity[];

  @OneToOne(() => FooterEntity, (footer) => footer.report, {
    cascade: true,
    eager: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  t6_footer: FooterEntity;
}
