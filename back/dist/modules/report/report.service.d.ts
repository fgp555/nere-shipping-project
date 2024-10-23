import { Repository } from 'typeorm';
import { Report } from '../../entities/Report.entity';
export declare class ReportService {
    private readonly reportRepository;
    constructor(reportRepository: Repository<Report>);
    createReport(data: Partial<Report>): Promise<Report>;
    findAllReports(): Promise<Report[]>;
    findReportById(id: number): Promise<Report>;
    updateReport(id: number, data: Partial<Report>): Promise<Report>;
    deleteReport(id: number): Promise<void>;
}
