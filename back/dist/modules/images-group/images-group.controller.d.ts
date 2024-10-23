import { ImagesGroupService } from './images-group.service';
import { ImagesGroup } from '../../entities/ImagesGroup.entity';
export declare class ImagesGroupController {
    private readonly imagesGroupService;
    constructor(imagesGroupService: ImagesGroupService);
    create(createImagesGroupDto: Partial<ImagesGroup>): Promise<ImagesGroup>;
    findAll(): Promise<ImagesGroup[]>;
    findOne(id: number): Promise<ImagesGroup>;
    update(id: number, updateImagesGroupDto: Partial<ImagesGroup>): Promise<ImagesGroup>;
    remove(id: number): Promise<void>;
}
