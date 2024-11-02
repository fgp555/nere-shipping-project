import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './config/typeorm';
import { T4UnstuffingModule } from './module/t4_unstuffing/t4_unstuffing.module';
import { ReportModule } from './module/report/report.module';
import { T5DamageModule } from './module/t5_damage/t5_damage.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    T4UnstuffingModule,
    ReportModule,
    T5DamageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
