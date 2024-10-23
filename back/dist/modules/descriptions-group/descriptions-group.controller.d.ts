import { DescriptionsGroupService } from './descriptions-group.service';
import { DescriptionsGroup } from '../../entities/DescriptionsGroup.entity';
export declare class DescriptionsGroupController {
    private readonly descriptionsGroupService;
    constructor(descriptionsGroupService: DescriptionsGroupService);
    create(createDescriptionsGroupDto: Partial<DescriptionsGroup>): Promise<DescriptionsGroup>;
    findAll(): Promise<DescriptionsGroup[]>;
    findOne(id: number): Promise<DescriptionsGroup>;
    update(id: number, updateDescriptionsGroupDto: Partial<DescriptionsGroup>): Promise<DescriptionsGroup>;
    remove(id: number): Promise<void>;
}
