import { Repository } from 'typeorm';
import { Description } from '../../entities/Description.entity';
export declare class DescriptionService {
    private readonly descriptionRepository;
    constructor(descriptionRepository: Repository<Description>);
    createDescription(data: Partial<Description>): Promise<Description>;
    findAllDescriptions(): Promise<Description[]>;
    findDescriptionById(id: number): Promise<Description>;
    updateDescription(id: number, data: Partial<Description>): Promise<Description>;
    deleteDescription(id: number): Promise<void>;
}
