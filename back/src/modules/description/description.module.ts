import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DescriptionService } from './description.service';
import { DescriptionController } from './description.controller';
import { Description } from '../../entities/Description.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Description])],
  providers: [DescriptionService],
  controllers: [DescriptionController],
})
export class DescriptionModule {}
