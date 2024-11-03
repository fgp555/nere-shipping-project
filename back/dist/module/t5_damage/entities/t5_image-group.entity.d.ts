import { T5DamageEntity } from './t5_damage.entity';
export declare class T5ImageGroupEntity {
    id: number;
    group_name: string;
    title: string;
    b_l_no: string;
    consignee: string;
    marks: string;
    qty_of_pkgs: number;
    goods: string;
    remarks: string;
    images: string[];
    images_notes: string[];
    damage: T5DamageEntity;
}
