import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreExistingDamageService } from './pre-existing-damage.service';
import { PreExistingDamageController } from './pre-existing-damage.controller';
import { PreExistingDamage } from '../../entities/PreExistingDamage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PreExistingDamage])],
  providers: [PreExistingDamageService],
  controllers: [PreExistingDamageController],
})
export class PreExistingDamageModule {}
