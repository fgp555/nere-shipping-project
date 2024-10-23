import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DescriptionsGroupService } from './descriptions-group.service';
import { DescriptionsGroupController } from './descriptions-group.controller';
import { DescriptionsGroup } from '../../entities/DescriptionsGroup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DescriptionsGroup])],
  providers: [DescriptionsGroupService],
  controllers: [DescriptionsGroupController],
})
export class DescriptionsGroupModule {}
