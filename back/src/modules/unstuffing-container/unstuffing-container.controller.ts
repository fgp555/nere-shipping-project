import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UnstuffingContainerService } from './unstuffing-container.service';
import { UnstuffingContainer } from '../../entities/UnstuffingContainer.entity';

@Controller('unstuffing-containers')
export class UnstuffingContainerController {
  constructor(private readonly unstuffingContainerService: UnstuffingContainerService) {}

  @Post()
  async create(@Body() createUnstuffingContainerDto: Partial<UnstuffingContainer>): Promise<UnstuffingContainer> {
    return this.unstuffingContainerService.createUnstuffingContainer(createUnstuffingContainerDto);
  }

  @Get()
  async findAll(): Promise<UnstuffingContainer[]> {
    return this.unstuffingContainerService.findAllUnstuffingContainers();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UnstuffingContainer> {
    return this.unstuffingContainerService.findUnstuffingContainerById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUnstuffingContainerDto: Partial<UnstuffingContainer>): Promise<UnstuffingContainer> {
    return this.unstuffingContainerService.updateUnstuffingContainer(id, updateUnstuffingContainerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.unstuffingContainerService.deleteUnstuffingContainer(id);
  }
}
