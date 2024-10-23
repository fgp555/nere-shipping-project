import { Repository } from 'typeorm';
import { DescriptionsGroup } from '../../entities/DescriptionsGroup.entity';
export declare class DescriptionsGroupService {
    private readonly descriptionsGroupRepository;
    constructor(descriptionsGroupRepository: Repository<DescriptionsGroup>);
    createDescriptionsGroup(data: Partial<DescriptionsGroup>): Promise<DescriptionsGroup>;
    findAllDescriptionsGroups(): Promise<DescriptionsGroup[]>;
    findDescriptionsGroupById(id: number): Promise<DescriptionsGroup>;
    updateDescriptionsGroup(id: number, data: Partial<DescriptionsGroup>): Promise<DescriptionsGroup>;
    deleteDescriptionsGroup(id: number): Promise<void>;
}
