// src/seeder/seeder.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { SecuringSeals } from '../entities/SecuringSeals.entity';
import { UnstuffingContainer } from '../entities/UnstuffingContainer.entity';
import { PreExistingDamage } from '../entities/PreExistingDamage.entity';
import { Container } from '../entities/Containers.entity';
import { ImagesPathimg } from '../entities/ImagesPathimg.entity';
import { ImagesGroup } from '../entities/ImagesGroup.entity';
import { Description } from '../entities/Description.entity';
import { DescriptionsGroup } from '../entities/DescriptionsGroup.entity';
import { DetailsShipment } from 'src/entities/DetailsShipment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SecuringSeals,
      UnstuffingContainer,
      PreExistingDamage,
      Container,
      ImagesPathimg,
      ImagesGroup,
      Description,
      DescriptionsGroup,
      DetailsShipment,
    ]),
  ],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
