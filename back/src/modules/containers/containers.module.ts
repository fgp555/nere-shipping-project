import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContainersService } from './containers.service';
import { ContainersController } from './containers.controller';
import { Containers } from '../../entities/Containers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Containers])],
  providers: [ContainersService],
  controllers: [ContainersController],
})
export class ContainersModule {}
