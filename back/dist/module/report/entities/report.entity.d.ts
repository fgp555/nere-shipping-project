import { T4UnstuffingEntity } from 'src/module/t4_unstuffing/entities/t4_unstuffing.entity';
import { T5DamageEntity } from 'src/module/t5_damage/entities/t5_damage.entity';
import { HeaderEntity } from './header.entity';
import { DetailsShipment } from './details-shipment.entity';
import { RelevantTimes } from './relevant-times.entity';
import { SecuringSeals } from './securing-seals.entity';
import { FooterEntity } from './footer.entity';
import { UserEntity } from 'src/module/user/entities/user.entity';
export declare class ReportEntity {
    id: number;
    mbl_code: string;
    t0_header: HeaderEntity;
    t1_details_shipment: DetailsShipment;
    T2_relevant_times: RelevantTimes[];
    t3_securing_seals: SecuringSeals[];
    t4_unstuffing: T4UnstuffingEntity[];
    t5_damage: T5DamageEntity[];
    t6_footer: FooterEntity;
    user: UserEntity;
}
