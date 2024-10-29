import { Report } from './report.entity';
export declare class PreExistingDamage {
    id: number;
    notes: string[];
    damages: {
        title: string;
        b_l_no: string;
        consignee: string;
        marks: string;
        qty_of_pkgs: number;
        goods: string;
        remarks: string;
        images: {
            path: string;
            description: string;
        }[];
    }[];
    report: Report;
}
