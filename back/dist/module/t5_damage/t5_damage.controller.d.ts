import { T5DamageService } from './t5_damage.service';
import { CreateT5DamageDto } from './dto/create-t5_damage.dto';
import { UpdateT5DamageDto } from './dto/update-t5_damage.dto';
export declare class T5DamageController {
    private readonly t5DamageService;
    constructor(t5DamageService: T5DamageService);
    create(createT5DamageDto: CreateT5DamageDto): Promise<import("./entities/t5_damage.entity").T5DamageEntity[]>;
    findAll(): Promise<import("./entities/t5_damage.entity").T5DamageEntity[]>;
    findOne(id: string): Promise<import("./entities/t5_damage.entity").T5DamageEntity>;
    update(id: string, updateT5DamageDto: UpdateT5DamageDto): Promise<import("./entities/t5_damage.entity").T5DamageEntity>;
    remove(id: string): Promise<import("./entities/t5_damage.entity").T5DamageEntity>;
}
