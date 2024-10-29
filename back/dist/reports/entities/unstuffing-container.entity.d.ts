import { Report } from './report.entity';
export declare class UnstuffingContainer {
    id: number;
    notes: string[];
    images: {
        path: string;
        description: string;
    }[];
    foot_note: string;
    report: Report;
}
