import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ReportEntity } from './entities/report.entity';
import { Repository } from 'typeorm';
export declare class ReportService {
    private readonly reportRepository;
    constructor(reportRepository: Repository<ReportEntity>);
    create(createReportDto: CreateReportDto, imagesGroups: {
        [key: string]: string[];
    }, notesGroups: {
        [key: string]: string[];
    }): Promise<ReportEntity>;
    findAll(): Promise<ReportEntity[]>;
    findOne(id: number): string;
    update(id: number, updateReportDto: UpdateReportDto): string;
    remove(id: number): string;
}
