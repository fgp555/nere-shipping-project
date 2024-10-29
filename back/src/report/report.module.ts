import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { Report } from './entities/report.entity';
import { Header } from './entities/header.entity';
import { DetailsShipment } from './entities/details-shipment.entity';
import { RelevantTimes } from './entities/relevant-times.entity';
import { SecuringSeals } from './entities/securing-seals.entity';
import { UnstuffingContainer } from './entities/unstuffing-container.entity';
import { PreExistingDamage } from './entities/pre-existing-damage.entity';
import { Weather } from './entities/weather.entity';
import { Footer } from './entities/footer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Report,
      Header,
      DetailsShipment,
      RelevantTimes,
      SecuringSeals,
      UnstuffingContainer,
      PreExistingDamage,
      Weather,
      Footer,
    ]),
  ],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
