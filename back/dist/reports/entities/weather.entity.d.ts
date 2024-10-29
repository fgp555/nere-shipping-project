import { Report } from './report.entity';
export declare class Weather {
    id: number;
    notes: string[];
    temperature: number;
    humidity: number;
    report: Report;
}
