import { ContainersService } from './containers.service';
import { Container } from '../../entities/Containers.entity';
export declare class ContainersController {
    private readonly containersService;
    constructor(containersService: ContainersService);
    create(createContainerDto: Partial<Container>): Promise<Container>;
    findAll(): Promise<Container[]>;
    findOne(id: number): Promise<Container>;
    update(id: number, updateContainerDto: Partial<Container>): Promise<Container>;
    remove(id: number): Promise<void>;
}
