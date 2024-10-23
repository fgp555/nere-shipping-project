import { Repository } from 'typeorm';
import { Containers } from '../../entities/Containers.entity';
export declare class ContainersService {
    private readonly containersRepository;
    constructor(containersRepository: Repository<Containers>);
    createContainer(data: Partial<Containers>): Promise<Containers>;
    findAllContainers(): Promise<Containers[]>;
    findContainerById(id: number): Promise<Containers>;
    updateContainer(id: number, data: Partial<Containers>): Promise<Containers>;
    deleteContainer(id: number): Promise<void>;
}
