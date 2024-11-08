import { UpdateReportDto } from './dto/update-report.dto';
import { ReportEntity } from './entities/report.entity';
import { Repository } from 'typeorm';
export declare class ReportService {
    private reportRepository;
    constructor(reportRepository: Repository<ReportEntity>);
    create(createReportDto: any): Promise<any>;
    findAll(): Promise<ReportEntity[]>;
    findOne(mbl_code: string): Promise<ReportEntity>;
    dowloadTest(): Promise<string>;
    download(mbl_code: string): Promise<string>;
    mbl_code(): Promise<any[]>;
    update(id: number, updateReportDto: UpdateReportDto): string;
    remove(mbl_code: string): Promise<ReportEntity>;
}
