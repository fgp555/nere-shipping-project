import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ContainersService } from './containers.service';
import { Container } from '../../entities/Containers.entity';

@Controller('containers')
export class ContainersController {
  constructor(private readonly containersService: ContainersService) {}

  @Post()
  async create(@Body() createContainerDto: Partial<Container>): Promise<Container> {
    return this.containersService.createContainer(createContainerDto);
  }

  @Get()
  async findAll(): Promise<Container[]> {
    return this.containersService.findAllContainers();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Container> {
    return this.containersService.findContainerById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateContainerDto: Partial<Container>): Promise<Container> {
    return this.containersService.updateContainer(id, updateContainerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.containersService.deleteContainer(id);
  }
}
