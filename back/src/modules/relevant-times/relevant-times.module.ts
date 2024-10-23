import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelevantTimesService } from './relevant-times.service';
import { RelevantTimesController } from './relevant-times.controller';
import { RelevantTimes } from '../../entities/RelevantTimes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RelevantTimes])],
  providers: [RelevantTimesService],
  controllers: [RelevantTimesController],
})
export class RelevantTimesModule {}
