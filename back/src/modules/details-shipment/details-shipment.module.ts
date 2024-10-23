import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailsShipmentService } from './details-shipment.service';
import { DetailsShipmentController } from './details-shipment.controller';
import { DetailsShipment } from '../../entities/DetailsShipment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetailsShipment])],
  providers: [DetailsShipmentService],
  controllers: [DetailsShipmentController],
})
export class DetailsShipmentModule {}
