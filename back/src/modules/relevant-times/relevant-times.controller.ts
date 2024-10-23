import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RelevantTimesService } from './relevant-times.service';
import { RelevantTimes } from '../../entities/RelevantTimes.entity';

@Controller('relevant-times')
export class RelevantTimesController {
  constructor(private readonly relevantTimesService: RelevantTimesService) {}

  @Post()
  async create(@Body() createRelevantTimesDto: Partial<RelevantTimes>): Promise<RelevantTimes> {
    return this.relevantTimesService.createRelevantTimes(createRelevantTimesDto);
  }

  @Get()
  async findAll(): Promise<RelevantTimes[]> {
    return this.relevantTimesService.findAllRelevantTimes();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RelevantTimes> {
    return this.relevantTimesService.findRelevantTimesById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateRelevantTimesDto: Partial<RelevantTimes>): Promise<RelevantTimes> {
    return this.relevantTimesService.updateRelevantTimes(id, updateRelevantTimesDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.relevantTimesService.deleteRelevantTimes(id);
  }
}
