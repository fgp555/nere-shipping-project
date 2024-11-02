import { T4UnstuffingEntity } from '../t4_unstuffing/entities/t4_unstuffing.entity';
export declare class ImageGroupEntity {
    id: number;
    group_name: string;
    images: string[];
    images_notes: string[];
    unstuffing: T4UnstuffingEntity;
}
