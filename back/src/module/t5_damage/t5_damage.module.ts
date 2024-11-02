import { Module } from '@nestjs/common';
import { T5DamageService } from './t5_damage.service';
import { T5DamageController } from './t5_damage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { T5DamageEntity } from './entities/t5_damage.entity';
import { ReportEntity } from '../report/entities/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([T5DamageEntity, ReportEntity])],
  controllers: [T5DamageController],
  providers: [T5DamageService],
})
export class T5DamageModule {}
