import { UnstuffingContainerService } from './unstuffing-container.service';
import { CreateUnstuffingContainerDto } from './dto/create-unstuffing-container.dto';
export declare class UnstuffingContainerController {
    private readonly unstuffingContainerService;
    constructor(unstuffingContainerService: UnstuffingContainerService);
    findAll(): Promise<import("../../entities/UnstuffingContainer.entity").UnstuffingContainer[]>;
    findOne(id: string): Promise<import("../../entities/UnstuffingContainer.entity").UnstuffingContainer>;
    create(createUnstuffingContainerDto: CreateUnstuffingContainerDto): Promise<import("../../entities/UnstuffingContainer.entity").UnstuffingContainer[]>;
}
