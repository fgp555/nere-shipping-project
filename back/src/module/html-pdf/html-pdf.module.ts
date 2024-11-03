import { Module } from '@nestjs/common';
import { HtmlPdfService } from './html-pdf.service';
import { HtmlPdfController } from './html-pdf.controller';
import { ReportService } from '../report/report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportEntity } from '../report/entities/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReportEntity])],
  controllers: [HtmlPdfController],
  providers: [HtmlPdfService, ReportService],
})
export class HtmlPdfModule {}
