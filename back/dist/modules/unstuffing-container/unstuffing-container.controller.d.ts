import { UnstuffingContainerService } from './unstuffing-container.service';
import { UnstuffingContainer } from '../../entities/UnstuffingContainer.entity';
export declare class UnstuffingContainerController {
    private readonly unstuffingContainerService;
    constructor(unstuffingContainerService: UnstuffingContainerService);
    create(createUnstuffingContainerDto: Partial<UnstuffingContainer>): Promise<UnstuffingContainer>;
    findAll(): Promise<UnstuffingContainer[]>;
    findOne(id: number): Promise<UnstuffingContainer>;
    update(id: number, updateUnstuffingContainerDto: Partial<UnstuffingContainer>): Promise<UnstuffingContainer>;
    remove(id: number): Promise<void>;
}
