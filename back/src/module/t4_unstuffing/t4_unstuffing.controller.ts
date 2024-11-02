// back/src/module/t4_unstuffing/t4_unstuffing.controller.ts

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
import { T4UnstuffingService } from './t4_unstuffing.service';
import { CreateT4UnstuffingDto } from './dto/create-t4_unstuffing.dto';
import { UpdateT4UnstuffingDto } from './dto/update-t4_unstuffing.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('t4-unstuffing')
export class T4UnstuffingController {
  constructor(private readonly t4UnstuffingService: T4UnstuffingService) {}

  @Post('upload')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: './uploads/t4_unstuffing',
        filename: (req, file, callback) => {
          const uniqueSuffix = new Date().toISOString().replace(/[:.\-Z]/g, '');
          // const ext = extname(file.originalname);
          callback(
            null,
            `${uniqueSuffix}_${file.fieldname}_${file.originalname}`,
          );
        },
      }),
    }),
  )
  async create(
    @Body() createT4UnstuffingDto: CreateT4UnstuffingDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    // Estructuras para almacenar las imágenes y notas de cada grupo
    const imagesGroups = {};
    const notesGroups = {};

    // Procesar archivos y agruparlos según el campo dinámico
    files.forEach((file) => {
      const fieldName = file.fieldname; // e.g., 'images_group_1', 'images_group_2', etc.

      // Agrupar imágenes por el nombre del campo dinámico
      if (!imagesGroups[fieldName]) {
        imagesGroups[fieldName] = [];
      }
      imagesGroups[fieldName].push(`/uploads/t4_unstuffing/${file.filename}`);
    });

    // Procesar notas asociadas a cada grupo de imágenes
    Object.keys(createT4UnstuffingDto).forEach((key) => {
      if (key.startsWith('images_group_') && key.endsWith('_notes')) {
        const groupName = key.replace('_notes', '');
        notesGroups[groupName] = JSON.parse(createT4UnstuffingDto[key]);
      }
    });

    console.log('Images Groups: ', imagesGroups);
    console.log('Notes Groups: ', notesGroups);

    // Llama al servicio con los datos procesados
    return this.t4UnstuffingService.create(
      createT4UnstuffingDto,
      imagesGroups,
      notesGroups,
    );
  }

  @Get()
  findAll() {
    return this.t4UnstuffingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.t4UnstuffingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateT4UnstuffingDto: UpdateT4UnstuffingDto,
  ) {
    return this.t4UnstuffingService.update(+id, updateT4UnstuffingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.t4UnstuffingService.remove(+id);
  }
}
