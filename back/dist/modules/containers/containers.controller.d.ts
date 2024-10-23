import { ContainersService } from './containers.service';
import { Containers } from '../../entities/Containers.entity';
export declare class ContainersController {
    private readonly containersService;
    constructor(containersService: ContainersService);
    create(createContainerDto: Partial<Containers>): Promise<Containers>;
    findAll(): Promise<Containers[]>;
    findOne(id: number): Promise<Containers>;
    update(id: number, updateContainerDto: Partial<Containers>): Promise<Containers>;
    remove(id: number): Promise<void>;
}
