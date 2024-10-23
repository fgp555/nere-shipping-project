import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrm from './config/typeOrm';
import { Report } from './entities/Report.entity';
import { DetailsShipment } from './entities/DetailsShipment.entity';
import { RelevantTimes } from './entities/RelevantTimes.entity';
import { SecuringSeals } from './entities/SecuringSeals.entity';
import { UnstuffingContainer } from './entities/UnstuffingContainer.entity';
import { PreExistingDamage } from './entities/PreExistingDamage.entity';
import { Container } from './entities/Containers.entity';
import { ImagesPathimg } from './entities/ImagesPathimg.entity';
import { ImagesGroup } from './entities/ImagesGroup.entity';
import { Description } from './entities/Description.entity';
import { DescriptionsGroup } from './entities/DescriptionsGroup.entity';
import { SeederModule } from './seeder/seeder.module';
import { SeederService } from './seeder/seeder.service';
import { ContainersModule } from './modules/containers/containers.module';
import { DescriptionModule } from './modules/description/description.module';
import { DescriptionsGroupModule } from './modules/descriptions-group/descriptions-group.module';
import { DetailsShipmentModule } from './modules/details-shipment/details-shipment.module';
import { ImagesGroupModule } from './modules/images-group/images-group.module';
import { ImagesPathimgModule } from './modules/images-pathimg/images-pathimg.module';
import { PreExistingDamageModule } from './modules/pre-existing-damage/pre-existing-damage.module';
import { RelevantTimesModule } from './modules/relevant-times/relevant-times.module';
import { ReportModule } from './modules/report/report.module';
import { SecuringSealsModule } from './modules/securing-seals/securing-seals.module';
import { UnstuffingContainerModule } from './modules/unstuffing-container/unstuffing-container.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('typeorm'),
    }),
    TypeOrmModule.forFeature([
      Report,
      DetailsShipment,
      RelevantTimes,
      SecuringSeals,
      UnstuffingContainer,
      PreExistingDamage,
      Container,
      ImagesPathimg,
      ImagesGroup,
      Description,
      DescriptionsGroup,
    ]),
    // SeederModule,
    ContainersModule,
    DescriptionModule,
    DescriptionsGroupModule,
    DetailsShipmentModule,
    ImagesGroupModule,
    ImagesPathimgModule,
    PreExistingDamageModule,
    RelevantTimesModule,
    ReportModule,
    SecuringSealsModule,
    UnstuffingContainerModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // constructor(private readonly seederService: SeederService) {
  //   this.runSeeders();
  // }

  // async runSeeders() {
  //   await this.seederService.seed();
  // }
}
