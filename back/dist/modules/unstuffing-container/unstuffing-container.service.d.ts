import { Repository } from 'typeorm';
import { UnstuffingContainer } from 'src/entities/UnstuffingContainer.entity';
export declare class UnstuffingContainerService {
    private unstuffingContainerRepository;
    constructor(unstuffingContainerRepository: Repository<UnstuffingContainer>);
    findAll(): Promise<UnstuffingContainer[]>;
    findOne(id: number): Promise<UnstuffingContainer>;
    create(createUnstuffingContainerDto: any): Promise<UnstuffingContainer[]>;
}
