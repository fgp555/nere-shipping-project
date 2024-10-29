import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Header } from './header.entity';
import { DetailsShipment } from './details-shipment.entity';
import { RelevantTimes } from './relevant-times.entity';
import { SecuringSeals } from './securing-seals.entity';
import { UnstuffingContainer } from './unstuffing-container.entity';
import { PreExistingDamage } from './pre-existing-damage.entity';
import { Weather } from './weather.entity';
import { Footer } from './footer.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Header, (header) => header.report, { cascade: true })
  @JoinColumn()
  t0_header: Header;

  @OneToOne(() => DetailsShipment, (details) => details.report, { cascade: true })
  @JoinColumn()
  t1_details_shipment: DetailsShipment;

  @OneToMany(() => RelevantTimes, (times) => times.report, { cascade: true })
  T2_relevant_times: RelevantTimes[];

  @OneToMany(() => SecuringSeals, (seals) => seals.report, { cascade: true })
  t3_securing_seals: SecuringSeals[];

  @OneToOne(() => UnstuffingContainer, (unstuffing) => unstuffing.report, { cascade: true })
  @JoinColumn()
  t4_unstuffing_container: UnstuffingContainer;

  @OneToOne(() => PreExistingDamage, (damage) => damage.report, { cascade: true })
  @JoinColumn()
  t5_pre_existing_damage: PreExistingDamage;

  @OneToOne(() => Weather, (weather) => weather.report, { cascade: true })
  @JoinColumn()
  t6_the_weather: Weather;

  @OneToOne(() => Footer, (footer) => footer.report, { cascade: true })
  @JoinColumn()
  t7_footer: Footer;
}
