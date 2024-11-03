import { ImageGroupEntity } from 'src/module/image/image-group.entity';
import { ReportEntity } from 'src/module/report/entities/report.entity';
export declare class T4UnstuffingEntity {
    id: number;
    notes: string[];
    foot_note: string;
    images_groups: ImageGroupEntity[];
    report_mbl_code: ReportEntity;
}
