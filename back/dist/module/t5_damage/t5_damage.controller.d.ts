import { T5DamageService } from './t5_damage.service';
export declare class T5DamageController {
    private readonly t5DamageService;
    constructor(t5DamageService: T5DamageService);
    create(data: string, files: Express.Multer.File[]): Promise<import("./entities/t5_damage.entity").T5DamageEntity>;
    findAll(): Promise<import("./entities/t5_damage.entity").T5DamageEntity[]>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
