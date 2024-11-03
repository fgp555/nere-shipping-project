import { ReportService } from './report.service';
import { UpdateReportDto } from './dto/update-report.dto';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    create(createReportDto: any): Promise<any>;
    findAll(): Promise<import("./entities/report.entity").ReportEntity[]>;
    mbl_code(): Promise<any[]>;
    findOne(mbl_code: string): Promise<import("./entities/report.entity").ReportEntity>;
    dowloadTest(): Promise<string>;
    dowload(mbl_code: string): Promise<string>;
    update(id: string, updateReportDto: UpdateReportDto): string;
    remove(id: string): string;
}
