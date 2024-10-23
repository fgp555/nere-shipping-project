import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesPathimgService } from './images-pathimg.service';
import { ImagesPathimgController } from './images-pathimg.controller';
import { ImagesPathimg } from '../../entities/ImagesPathimg.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImagesPathimg])],
  providers: [ImagesPathimgService],
  controllers: [ImagesPathimgController],
})
export class ImagesPathimgModule {}
