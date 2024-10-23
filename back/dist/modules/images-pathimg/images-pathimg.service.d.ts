import { Repository } from 'typeorm';
import { ImagesPathimg } from '../../entities/ImagesPathimg.entity';
export declare class ImagesPathimgService {
    private readonly imagesPathimgRepository;
    constructor(imagesPathimgRepository: Repository<ImagesPathimg>);
    createImagesPathimg(data: Partial<ImagesPathimg>): Promise<ImagesPathimg>;
    findAllImagesPathimgs(): Promise<ImagesPathimg[]>;
    findImagesPathimgById(id: number): Promise<ImagesPathimg>;
    updateImagesPathimg(id: number, data: Partial<ImagesPathimg>): Promise<ImagesPathimg>;
    deleteImagesPathimg(id: number): Promise<void>;
}
