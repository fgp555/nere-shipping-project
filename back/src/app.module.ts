import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './modules/admin/admin.controller';
import { AdminService } from './modules/admin/admin.service';
import { BookingRefController } from './modules/booking-ref/booking-ref.controller';
import { BookingRefService } from './modules/booking-ref/booking-ref.service';
import { ClientController } from './modules/client/client.controller';
import { ClientService } from './modules/client/client.service';
import { ContainerController } from './modules/container/container.controller';
import { ContainerService } from './modules/container/container.service';
import { PackageController } from './modules/package/package.controller';
import { PackageService } from './modules/package/package.service';
import { SeederModule } from './seed/seeder.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeOrm';
import { AdminEntity } from './modules/admin/entity-dtos/admin.entity';
import { BookingRefEntity } from './modules/booking-ref/entity-dtos/booking-ref.entity';
import { ContainerEntity } from './modules/container/entity-dtos/container.entity';
import { ClientEntity } from './modules/client/entity-dtos/client.entity';
import { PackageEntity } from './modules/package/entity-dtos/package.entity';
import { ImageEntity } from './modules/image/entity-dtos/image.entity';
import { ImageModule } from './modules/image/image.module';
import { HtmlPdfModule } from './modules/html-pdf/html-pdf.module';
import { PreDamageModule } from './modules/5pre-damage/5pre-damage.module';
import { PreDamageEntity } from './modules/5pre-damage/entity-dtos/5pre-damage.entity';

@Module({
  imports: [
    ImageModule,
    SeederModule,
    HtmlPdfModule,
    PreDamageModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('typeorm'),
    }),
    TypeOrmModule.forFeature([
      AdminEntity,
      BookingRefEntity,
      ContainerEntity,
      ClientEntity,
      PackageEntity,
      ImageEntity,
      PreDamageEntity,
    ]),
  ],
  controllers: [
    AppController,
    AdminController,
    BookingRefController,
    ClientController,
    ContainerController,
    PackageController,
  ],
  providers: [
    AppService,
    AdminService,
    BookingRefService,
    ClientService,
    ContainerService,
    PackageService,
  ],
})
export class AppModule {}
