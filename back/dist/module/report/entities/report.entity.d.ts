import { T4UnstuffingEntity } from 'src/module/t4_unstuffing/entities/t4_unstuffing.entity';
import { T5DamageEntity } from 'src/module/t5_damage/entities/t5_damage.entity';
export declare class ReportEntity {
    id: number;
    mbl_code: string;
    t4_unstuffing: T4UnstuffingEntity[];
    t5_damage: T5DamageEntity[];
}
