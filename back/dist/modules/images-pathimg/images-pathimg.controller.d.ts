import { ImagesPathimgService } from './images-pathimg.service';
import { ImagesPathimg } from '../../entities/ImagesPathimg.entity';
export declare class ImagesPathimgController {
    private readonly imagesPathimgService;
    constructor(imagesPathimgService: ImagesPathimgService);
    create(createImagesPathimgDto: Partial<ImagesPathimg>): Promise<ImagesPathimg>;
    findAll(): Promise<ImagesPathimg[]>;
    findOne(id: number): Promise<ImagesPathimg>;
    update(id: number, updateImagesPathimgDto: Partial<ImagesPathimg>): Promise<ImagesPathimg>;
    remove(id: number): Promise<void>;
}
