import { Repository } from 'typeorm';
import { SecuringSeals } from '../../entities/SecuringSeals.entity';
export declare class SecuringSealsService {
    private readonly securingSealsRepository;
    constructor(securingSealsRepository: Repository<SecuringSeals>);
    createSecuringSeal(data: Partial<SecuringSeals>): Promise<SecuringSeals>;
    findAllSecuringSeals(): Promise<SecuringSeals[]>;
    findSecuringSealById(id: number): Promise<SecuringSeals>;
    updateSecuringSeal(id: number, data: Partial<SecuringSeals>): Promise<SecuringSeals>;
    deleteSecuringSeal(id: number): Promise<void>;
}
