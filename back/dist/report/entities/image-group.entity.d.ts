import { ReportEntity } from './report.entity';
export declare class ImageGroupEntity {
    id: number;
    group_name: string;
    images: string[];
    images_notes: string[];
    report: ReportEntity;
}
