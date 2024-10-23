import { Repository } from 'typeorm';
import { PreExistingDamage } from '../../entities/PreExistingDamage.entity';
export declare class PreExistingDamageService {
    private readonly preExistingDamageRepository;
    constructor(preExistingDamageRepository: Repository<PreExistingDamage>);
    createPreExistingDamage(data: Partial<PreExistingDamage>): Promise<PreExistingDamage>;
    findAllPreExistingDamages(): Promise<PreExistingDamage[]>;
    findPreExistingDamageById(id: number): Promise<PreExistingDamage>;
    updatePreExistingDamage(id: number, data: Partial<PreExistingDamage>): Promise<PreExistingDamage>;
    deletePreExistingDamage(id: number): Promise<void>;
}
