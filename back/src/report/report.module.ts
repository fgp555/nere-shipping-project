import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { ReportEntity } from './entities/report.entity';
import { ImageGroupEntity } from './entities/image-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReportEntity, ImageGroupEntity])],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
