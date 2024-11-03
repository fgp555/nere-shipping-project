import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { T5DamageService } from './t5_damage.service';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('t5-damage')
export class T5DamageController {
  constructor(private readonly t5DamageService: T5DamageService) {}

  @Post('upload')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: './uploads/t5_damage',
        filename: (req, file, callback) => {
          const uniqueSuffix = new Date().toISOString().replace(/[:.\-Z]/g, '');
          callback(
            null,
            `${uniqueSuffix}_${file.fieldname}_${file.originalname}`,
          );
        },
      }),
    }),
  )
  async create(
    @Body('data') data: string,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const { mbl_code, notes, images_groups } = JSON.parse(data);

    // Llama al servicio con los datos procesados
    return this.t5DamageService.create(
      { notes, images_groups },
      mbl_code,
      files,
    );
  }

  @Get()
  findAll() {
    return this.t5DamageService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.t5DamageService.remove(+id);
  }
}
