import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnstuffingContainerService } from './unstuffing-container.service';
import { UnstuffingContainerController } from './unstuffing-container.controller';
import { UnstuffingContainer } from 'src/entities/UnstuffingContainer.entity';
import { DescriptionsGroup } from 'src/entities/DescriptionsGroup.entity';
import { DetailsShipment } from 'src/entities/DetailsShipment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UnstuffingContainer, DescriptionsGroup, DetailsShipment]),
  ],
  controllers: [UnstuffingContainerController],
  providers: [UnstuffingContainerService],
})
export class UnstuffingContainerModule {}
