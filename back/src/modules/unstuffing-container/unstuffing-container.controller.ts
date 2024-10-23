import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UnstuffingContainerService } from './unstuffing-container.service';
import { CreateUnstuffingContainerDto } from './dto/create-unstuffing-container.dto';

@Controller('unstuffing-containers')
export class UnstuffingContainerController {
  constructor(private readonly unstuffingContainerService: UnstuffingContainerService) {}

  @Get()
  findAll() {
    return this.unstuffingContainerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unstuffingContainerService.findOne(+id);
  }

  @Post()
  create(@Body() createUnstuffingContainerDto: CreateUnstuffingContainerDto) {
    return this.unstuffingContainerService.create(createUnstuffingContainerDto);
  }
}
