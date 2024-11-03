import { UpdateReportDto } from './dto/update-report.dto';
import { ReportEntity } from './entities/report.entity';
import { Repository } from 'typeorm';
export declare class ReportService {
    private reportRepository;
    constructor(reportRepository: Repository<ReportEntity>);
    create(createReportDto: any): Promise<any>;
    findAll(): Promise<ReportEntity[]>;
    findOne(id: number): string;
    update(id: number, updateReportDto: UpdateReportDto): string;
    remove(id: number): string;
}