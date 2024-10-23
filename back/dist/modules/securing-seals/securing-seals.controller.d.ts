import { SecuringSealsService } from './securing-seals.service';
import { SecuringSeals } from '../../entities/SecuringSeals.entity';
export declare class SecuringSealsController {
    private readonly securingSealsService;
    constructor(securingSealsService: SecuringSealsService);
    create(createSecuringSealDto: Partial<SecuringSeals>): Promise<SecuringSeals>;
    findAll(): Promise<SecuringSeals[]>;
    findOne(id: number): Promise<SecuringSeals>;
    update(id: number, updateSecuringSealDto: Partial<SecuringSeals>): Promise<SecuringSeals>;
    remove(id: number): Promise<void>;
}
