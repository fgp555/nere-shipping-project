import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PreExistingDamageService } from './pre-existing-damage.service';
import { PreExistingDamage } from '../../entities/PreExistingDamage.entity';

@Controller('pre-existing-damages')
export class PreExistingDamageController {
  constructor(private readonly preExistingDamageService: PreExistingDamageService) {}

  @Post()
  async create(@Body() createPreExistingDamageDto: Partial<PreExistingDamage>): Promise<PreExistingDamage> {
    return this.preExistingDamageService.createPreExistingDamage(createPreExistingDamageDto);
  }

  @Get()
  async findAll(): Promise<PreExistingDamage[]> {
    return this.preExistingDamageService.findAllPreExistingDamages();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PreExistingDamage> {
    return this.preExistingDamageService.findPreExistingDamageById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePreExistingDamageDto: Partial<PreExistingDamage>): Promise<PreExistingDamage> {
    return this.preExistingDamageService.updatePreExistingDamage(id, updatePreExistingDamageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.preExistingDamageService.deletePreExistingDamage(id);
  }
}
