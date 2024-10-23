import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ImagesGroupService } from './images-group.service';
import { ImagesGroup } from '../../entities/ImagesGroup.entity';

@Controller('images-groups')
export class ImagesGroupController {
  constructor(private readonly imagesGroupService: ImagesGroupService) {}

  @Post()
  async create(@Body() createImagesGroupDto: Partial<ImagesGroup>): Promise<ImagesGroup> {
    return this.imagesGroupService.createImagesGroup(createImagesGroupDto);
  }

  @Get()
  async findAll(): Promise<ImagesGroup[]> {
    return this.imagesGroupService.findAllImagesGroups();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ImagesGroup> {
    return this.imagesGroupService.findImagesGroupById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateImagesGroupDto: Partial<ImagesGroup>): Promise<ImagesGroup> {
    return this.imagesGroupService.updateImagesGroup(id, updateImagesGroupDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.imagesGroupService.deleteImagesGroup(id);
  }
}
