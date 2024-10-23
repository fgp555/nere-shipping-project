// src/seeder/seeder.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { SecuringSeals } from '../entities/SecuringSeals.entity';
import { UnstuffingContainer } from '../entities/UnstuffingContainer.entity';
import { PreExistingDamage } from '../entities/PreExistingDamage.entity';
import { Containers } from '../entities/Containers.entity';
import { ImagesPathimg } from '../entities/ImagesPathimg.entity';
import { ImagesGroup } from '../entities/ImagesGroup.entity';
import { Description } from '../entities/Description.entity';
import { DescriptionsGroup } from '../entities/DescriptionsGroup.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SecuringSeals,
      UnstuffingContainer,
      PreExistingDamage,
      Containers,
      ImagesPathimg,
      ImagesGroup,
      Description,
      DescriptionsGroup,
    ]),
  ],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
