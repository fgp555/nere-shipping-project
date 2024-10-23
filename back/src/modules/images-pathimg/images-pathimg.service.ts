import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImagesPathimg } from '../../entities/ImagesPathimg.entity';

@Injectable()
export class ImagesPathimgService {
  constructor(
    @InjectRepository(ImagesPathimg)
    private readonly imagesPathimgRepository: Repository<ImagesPathimg>,
  ) {}

  async createImagesPathimg(data: Partial<ImagesPathimg>): Promise<ImagesPathimg> {
    const imagesPathimg = this.imagesPathimgRepository.create(data);
    return this.imagesPathimgRepository.save(imagesPathimg);
  }

  async findAllImagesPathimgs(): Promise<ImagesPathimg[]> {
    return this.imagesPathimgRepository.find();
  }

  async findImagesPathimgById(id: number): Promise<ImagesPathimg> {
    return this.imagesPathimgRepository.findOne({ where: { id } });
  }

  async updateImagesPathimg(id: number, data: Partial<ImagesPathimg>): Promise<ImagesPathimg> {
    await this.imagesPathimgRepository.update(id, data);
    return this.imagesPathimgRepository.findOne({ where: { id } });
  }

  async deleteImagesPathimg(id: number): Promise<void> {
    await this.imagesPathimgRepository.delete(id);
  }
}
