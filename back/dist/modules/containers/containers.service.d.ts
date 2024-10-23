import { Repository } from 'typeorm';
import { Container } from '../../entities/Containers.entity';
export declare class ContainersService {
    private readonly containersRepository;
    constructor(containersRepository: Repository<Container>);
    createContainer(data: Partial<Container>): Promise<Container>;
    findAllContainers(): Promise<Container[]>;
    findContainerById(id: number): Promise<Container>;
    updateContainer(id: number, data: Partial<Container>): Promise<Container>;
    deleteContainer(id: number): Promise<void>;
}
