import { ReportEntity } from 'src/module/report/entities/report.entity';
import { T5ImageGroupEntity } from './t5_image-group.entity';
export declare class T5DamageEntity {
    id: number;
    notes: string[];
    foot_note: string;
    images_groups: T5ImageGroupEntity[];
    report_mbl_code: ReportEntity;
}
