import { ReportService } from './report.service';
import { Report } from '../../entities/Report.entity';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    create(createReportDto: Partial<Report>): Promise<Report>;
    findAll(): Promise<Report[]>;
    findOne(id: number): Promise<Report>;
    update(id: number, updateReportDto: Partial<Report>): Promise<Report>;
    remove(id: number): Promise<void>;
}
