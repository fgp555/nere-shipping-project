import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ContainersService } from './containers.service';
import { Containers } from '../../entities/Containers.entity';

@Controller('containers')
export class ContainersController {
  constructor(private readonly containersService: ContainersService) {}

  @Post()
  async create(@Body() createContainerDto: Partial<Containers>): Promise<Containers> {
    return this.containersService.createContainer(createContainerDto);
  }

  @Get()
  async findAll(): Promise<Containers[]> {
    return this.containersService.findAllContainers();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Containers> {
    return this.containersService.findContainerById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateContainerDto: Partial<Containers>): Promise<Containers> {
    return this.containersService.updateContainer(id, updateContainerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.containersService.deleteContainer(id);
  }
}
