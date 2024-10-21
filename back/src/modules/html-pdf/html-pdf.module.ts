import { Module } from '@nestjs/common';
import { HtmlPdfController } from './html-pdf.controller';
import { HtmlPdfService } from './html-pdf.service';
import { ImageService } from '../image/image.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageEntity } from '../image/entity-dtos/image.entity';
import { PreDamageService } from '../5pre-damage/5pre-damage.service';
import { PreDamageEntity } from '../5pre-damage/entity-dtos/5pre-damage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImageEntity, PreDamageEntity])],
  controllers: [HtmlPdfController],
  providers: [HtmlPdfService, PreDamageService, ImageService],
  exports: [],
})
export class HtmlPdfModule {}
