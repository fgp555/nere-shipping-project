import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { T5DamageService } from './t5_damage.service';
import { CreateT5DamageDto } from './dto/create-t5_damage.dto';
import { UpdateT5DamageDto } from './dto/update-t5_damage.dto';

@Controller('t5-damage')
export class T5DamageController {
  constructor(private readonly t5DamageService: T5DamageService) {}

  @Post()
  create(@Body() createT5DamageDto: CreateT5DamageDto) {
    return this.t5DamageService.create(createT5DamageDto);
  }

  @Get()
  findAll() {
    return this.t5DamageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.t5DamageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateT5DamageDto: UpdateT5DamageDto) {
    return this.t5DamageService.update(+id, updateT5DamageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.t5DamageService.remove(+id);
  }
}
