import { CreateT4UnstuffingDto } from './dto/create-t4_unstuffing.dto';
import { UpdateT4UnstuffingDto } from './dto/update-t4_unstuffing.dto';
import { T4UnstuffingEntity } from './entities/t4_unstuffing.entity';
import { Repository } from 'typeorm';
import { ReportEntity } from '../report/entities/report.entity';
export declare class T4UnstuffingService {
    private readonly t4Unstuffing;
    private reportRepository;
    constructor(t4Unstuffing: Repository<T4UnstuffingEntity>, reportRepository: Repository<ReportEntity>);
    create(createReportDto: CreateT4UnstuffingDto, imagesGroups: {
        [key: string]: string[];
    }, notesGroups: {
        [key: string]: string[];
    }, mbl_code: string): Promise<T4UnstuffingEntity>;
    findAll(): Promise<T4UnstuffingEntity[]>;
    findOne(id: number): string;
    update(id: number, updateT4UnstuffingDto: UpdateT4UnstuffingDto): string;
    remove(id: number): string;
}
