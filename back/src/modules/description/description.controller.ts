import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DescriptionService } from './description.service';
import { Description } from '../../entities/Description.entity';

@Controller('descriptions')
export class DescriptionController {
  constructor(private readonly descriptionService: DescriptionService) {}

  @Post()
  async create(@Body() createDescriptionDto: Partial<Description>): Promise<Description> {
    return this.descriptionService.createDescription(createDescriptionDto);
  }

  @Get()
  async findAll(): Promise<Description[]> {
    return this.descriptionService.findAllDescriptions();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Description> {
    return this.descriptionService.findDescriptionById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateDescriptionDto: Partial<Description>): Promise<Description> {
    return this.descriptionService.updateDescription(id, updateDescriptionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.descriptionService.deleteDescription(id);
  }
}
