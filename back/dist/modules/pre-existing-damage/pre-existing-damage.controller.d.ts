import { PreExistingDamageService } from './pre-existing-damage.service';
import { PreExistingDamage } from '../../entities/PreExistingDamage.entity';
export declare class PreExistingDamageController {
    private readonly preExistingDamageService;
    constructor(preExistingDamageService: PreExistingDamageService);
    create(createPreExistingDamageDto: Partial<PreExistingDamage>): Promise<PreExistingDamage>;
    findAll(): Promise<PreExistingDamage[]>;
    findOne(id: number): Promise<PreExistingDamage>;
    update(id: number, updatePreExistingDamageDto: Partial<PreExistingDamage>): Promise<PreExistingDamage>;
    remove(id: number): Promise<void>;
}
