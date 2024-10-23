import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ImagesPathimgService } from './images-pathimg.service';
import { ImagesPathimg } from '../../entities/ImagesPathimg.entity';

@Controller('images-pathimgs')
export class ImagesPathimgController {
  constructor(private readonly imagesPathimgService: ImagesPathimgService) {}

  @Post()
  async create(@Body() createImagesPathimgDto: Partial<ImagesPathimg>): Promise<ImagesPathimg> {
    return this.imagesPathimgService.createImagesPathimg(createImagesPathimgDto);
  }

  @Get()
  async findAll(): Promise<ImagesPathimg[]> {
    return this.imagesPathimgService.findAllImagesPathimgs();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ImagesPathimg> {
    return this.imagesPathimgService.findImagesPathimgById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateImagesPathimgDto: Partial<ImagesPathimg>): Promise<ImagesPathimg> {
    return this.imagesPathimgService.updateImagesPathimg(id, updateImagesPathimgDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.imagesPathimgService.deleteImagesPathimg(id);
  }
}
