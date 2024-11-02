// back/src/module/t4_unstuffing/t4_unstuffing.module.ts

import { Module } from '@nestjs/common';
import { T4UnstuffingService } from './t4_unstuffing.service';
import { T4UnstuffingController } from './t4_unstuffing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { T4UnstuffingEntity } from './entities/t4_unstuffing.entity';
import { ImageGroupEntity } from '../image/image-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([T4UnstuffingEntity, ImageGroupEntity])],
  controllers: [T4UnstuffingController],
  providers: [T4UnstuffingService],
})
export class T4UnstuffingModule {}
