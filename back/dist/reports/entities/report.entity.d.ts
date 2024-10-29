import { Header } from './header.entity';
import { DetailsShipment } from './details-shipment.entity';
import { RelevantTimes } from './relevant-times.entity';
import { SecuringSeals } from './securing-seals.entity';
import { UnstuffingContainer } from './unstuffing-container.entity';
import { PreExistingDamage } from './pre-existing-damage.entity';
import { Weather } from './weather.entity';
import { Footer } from './footer.entity';
export declare class Report {
    id: number;
    t0_header: Header;
    t1_details_shipment: DetailsShipment;
    T2_relevant_times: RelevantTimes[];
    t3_securing_seals: SecuringSeals[];
    t4_unstuffing_container: UnstuffingContainer;
    t5_pre_existing_damage: PreExistingDamage;
    t6_the_weather: Weather;
    t7_footer: Footer;
}
