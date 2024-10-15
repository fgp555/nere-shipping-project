import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinalReportController } from './final-report.controller';
import { FinalReportService } from './final-report.service';
import { HtmlPdfService } from '../html-pdf/html-pdf.service';
import { FinalReportEntity } from './entity-dtos/final-report.entity';
import { ImageEntity } from '../image/entity-dtos/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinalReportEntity, ImageEntity])],
  controllers: [FinalReportController],
  providers: [FinalReportService, HtmlPdfService],
  exports: [],
})
export class FinalReportModule {}
