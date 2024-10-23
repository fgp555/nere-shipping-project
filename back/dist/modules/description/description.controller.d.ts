import { DescriptionService } from './description.service';
import { Description } from '../../entities/Description.entity';
export declare class DescriptionController {
    private readonly descriptionService;
    constructor(descriptionService: DescriptionService);
    create(createDescriptionDto: Partial<Description>): Promise<Description>;
    findAll(): Promise<Description[]>;
    findOne(id: number): Promise<Description>;
    update(id: number, updateDescriptionDto: Partial<Description>): Promise<Description>;
    remove(id: number): Promise<void>;
}
