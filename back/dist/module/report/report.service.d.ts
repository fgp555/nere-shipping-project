import { UpdateReportDto } from './dto/update-report.dto';
import { ReportEntity } from './entities/report.entity';
import { Repository } from 'typeorm';
export declare class ReportService {
    private reportRepository;
    constructor(reportRepository: Repository<ReportEntity>);
    create(createReportDto: any): Promise<any>;
    findAll(): Promise<ReportEntity[]>;
    findOne(mbl_code: string): Promise<ReportEntity>;
    download(mbl_code: string): Promise<ReportEntity>;
    mbl_code(): Promise<any[]>;
    update(id: number, updateReportDto: UpdateReportDto): string;
    remove(id: number): string;
}
