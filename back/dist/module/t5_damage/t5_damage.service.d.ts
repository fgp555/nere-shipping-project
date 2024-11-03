import { T5DamageEntity } from './entities/t5_damage.entity';
import { Repository } from 'typeorm';
import { ReportEntity } from '../report/entities/report.entity';
export declare class T5DamageService {
    private readonly t5DamageRepository;
    private reportRepository;
    constructor(t5DamageRepository: Repository<T5DamageEntity>, reportRepository: Repository<ReportEntity>);
    create(createReportDto: any, mbl_code: string, files: Express.Multer.File[]): Promise<T5DamageEntity>;
    findAll(): Promise<T5DamageEntity[]>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
