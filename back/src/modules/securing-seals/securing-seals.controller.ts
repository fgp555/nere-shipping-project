import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SecuringSealsService } from './securing-seals.service';
import { SecuringSeals } from '../../entities/SecuringSeals.entity';

@Controller('securing-seals')
export class SecuringSealsController {
  constructor(private readonly securingSealsService: SecuringSealsService) {}

  @Post()
  async create(@Body() createSecuringSealDto: Partial<SecuringSeals>): Promise<SecuringSeals> {
    return this.securingSealsService.createSecuringSeal(createSecuringSealDto);
  }

  @Get()
  async findAll(): Promise<SecuringSeals[]> {
    return this.securingSealsService.findAllSecuringSeals();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<SecuringSeals> {
    return this.securingSealsService.findSecuringSealById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateSecuringSealDto: Partial<SecuringSeals>): Promise<SecuringSeals> {
    return this.securingSealsService.updateSecuringSeal(id, updateSecuringSealDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.securingSealsService.deleteSecuringSeal(id);
  }
}
