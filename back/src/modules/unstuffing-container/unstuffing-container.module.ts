import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnstuffingContainerService } from './unstuffing-container.service';
import { UnstuffingContainerController } from './unstuffing-container.controller';
import { UnstuffingContainer } from '../../entities/UnstuffingContainer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UnstuffingContainer])],
  providers: [UnstuffingContainerService],
  controllers: [UnstuffingContainerController],
})
export class UnstuffingContainerModule {}
