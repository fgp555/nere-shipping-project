import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HtmlPdfService } from '../html-pdf/html-pdf.service';
import { ImageEntity } from '../image/entity-dtos/image.entity';
import { PreDamageEntity } from './entity-dtos/5pre-damage.entity';
import { PreDamageController } from './5pre-damage.controller';
import { PreDamageService } from './5pre-damage.service';

@Module({
  imports: [TypeOrmModule.forFeature([PreDamageEntity, ImageEntity])],
  controllers: [PreDamageController],
  providers: [PreDamageService, HtmlPdfService],
  exports: [],
})
export class PreDamageModule {}
