import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecuringSealsService } from './securing-seals.service';
import { SecuringSealsController } from './securing-seals.controller';
import { SecuringSeals } from '../../entities/SecuringSeals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SecuringSeals])],
  providers: [SecuringSealsService],
  controllers: [SecuringSealsController],
})
export class SecuringSealsModule {}
