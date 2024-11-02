import { UpdateT5DamageDto } from './dto/update-t5_damage.dto';
import { T5DamageEntity } from './entities/t5_damage.entity';
import { Repository } from 'typeorm';
import { ReportEntity } from '../report/entities/report.entity';
export declare class T5DamageService {
    private t5DamageRepository;
    private reportRepository;
    constructor(t5DamageRepository: Repository<T5DamageEntity>, reportRepository: Repository<ReportEntity>);
    create(createT5DamageDto: any): Promise<T5DamageEntity[]>;
    findAll(): Promise<T5DamageEntity[]>;
    findOne(id: number): Promise<T5DamageEntity>;
    update(id: number, updateT5DamageDto: UpdateT5DamageDto): Promise<T5DamageEntity>;
    remove(id: number): Promise<T5DamageEntity>;
}
