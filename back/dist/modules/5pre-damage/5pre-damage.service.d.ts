import { Repository } from 'typeorm';
import { ImageEntity } from 'src/modules/image/entity-dtos/image.entity';
import { PreDamageEntity } from './entity-dtos/5pre-damage.entity';
export declare class PreDamageService {
    private finalReportRepository;
    private imageRepository;
    constructor(finalReportRepository: Repository<PreDamageEntity>, imageRepository: Repository<ImageEntity>);
    findAll(): Promise<PreDamageEntity[]>;
    findByMBL(mbl: string): Promise<PreDamageEntity | undefined>;
    findAllByMBL(mbl: string): Promise<PreDamageEntity[]>;
    findOne(id: number): Promise<PreDamageEntity>;
    create(finalReport: PreDamageEntity, images: Express.Multer.File[]): Promise<PreDamageEntity>;
    update(id: number, finalReport: PreDamageEntity, images: Express.Multer.File[]): Promise<PreDamageEntity>;
    remove(id: number): Promise<void>;
    private saveImages;
}
