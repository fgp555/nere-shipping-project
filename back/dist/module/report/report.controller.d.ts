import { ReportService } from './report.service';
import { UpdateReportDto } from './dto/update-report.dto';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    create(createReportDto: any): Promise<any>;
    findAll(): Promise<import("./entities/report.entity").ReportEntity[]>;
    mbl_code(): Promise<any[]>;
    findOne(id: string): string;
    update(id: string, updateReportDto: UpdateReportDto): string;
    remove(id: string): string;
}
