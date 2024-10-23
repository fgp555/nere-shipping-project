import { Repository } from 'typeorm';
import { UnstuffingContainer } from '../../entities/UnstuffingContainer.entity';
export declare class UnstuffingContainerService {
    private readonly unstuffingContainerRepository;
    constructor(unstuffingContainerRepository: Repository<UnstuffingContainer>);
    createUnstuffingContainer(data: Partial<UnstuffingContainer>): Promise<UnstuffingContainer>;
    findAllUnstuffingContainers(): Promise<UnstuffingContainer[]>;
    findUnstuffingContainerById(id: number): Promise<UnstuffingContainer>;
    updateUnstuffingContainer(id: number, data: Partial<UnstuffingContainer>): Promise<UnstuffingContainer>;
    deleteUnstuffingContainer(id: number): Promise<void>;
}
