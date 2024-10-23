import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesGroupService } from './images-group.service';
import { ImagesGroupController } from './images-group.controller';
import { ImagesGroup } from '../../entities/ImagesGroup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImagesGroup])],
  providers: [ImagesGroupService],
  controllers: [ImagesGroupController],
})
export class ImagesGroupModule {}
