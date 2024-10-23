import { Repository } from 'typeorm';
import { ImagesGroup } from '../../entities/ImagesGroup.entity';
export declare class ImagesGroupService {
    private readonly imagesGroupRepository;
    constructor(imagesGroupRepository: Repository<ImagesGroup>);
    createImagesGroup(data: Partial<ImagesGroup>): Promise<ImagesGroup>;
    findAllImagesGroups(): Promise<ImagesGroup[]>;
    findImagesGroupById(id: number): Promise<ImagesGroup>;
    updateImagesGroup(id: number, data: Partial<ImagesGroup>): Promise<ImagesGroup>;
    deleteImagesGroup(id: number): Promise<void>;
}
