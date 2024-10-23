import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DescriptionsGroupService } from './descriptions-group.service';
import { DescriptionsGroup } from '../../entities/DescriptionsGroup.entity';

@Controller('descriptions-groups')
export class DescriptionsGroupController {
  constructor(private readonly descriptionsGroupService: DescriptionsGroupService) {}

  @Post()
  async create(@Body() createDescriptionsGroupDto: Partial<DescriptionsGroup>): Promise<DescriptionsGroup> {
    return this.descriptionsGroupService.createDescriptionsGroup(createDescriptionsGroupDto);
  }

  @Get()
  async findAll(): Promise<DescriptionsGroup[]> {
    return this.descriptionsGroupService.findAllDescriptionsGroups();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<DescriptionsGroup> {
    return this.descriptionsGroupService.findDescriptionsGroupById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateDescriptionsGroupDto: Partial<DescriptionsGroup>): Promise<DescriptionsGroup> {
    return this.descriptionsGroupService.updateDescriptionsGroup(id, updateDescriptionsGroupDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.descriptionsGroupService.deleteDescriptionsGroup(id);
  }
}
