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
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post('upload')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: './uploads/t4',
        filename: (req, file, callback) => {
          const uniqueSuffix = new Date().toISOString().replace(/[:.\-Z]/g, '');
          // const ext = extname(file.originalname);
          callback(
            null,
            `${file.fieldname}_${uniqueSuffix}_${file.originalname}`,
          );
        },
      }),
    }),
  )
  async create(
    @Body() createReportDto: CreateReportDto,
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
      imagesGroups[fieldName].push(`/uploads/t4/${file.filename}`);
    });

    // Procesar notas asociadas a cada grupo de imágenes
    Object.keys(createReportDto).forEach((key) => {
      if (key.startsWith('images_group_') && key.endsWith('_notes')) {
        const groupName = key.replace('_notes', '');
        notesGroups[groupName] = JSON.parse(createReportDto[key]);
      }
    });

    console.log('Images Groups: ', imagesGroups);
    console.log('Notes Groups: ', notesGroups);

    // Llama al servicio con los datos procesados
    return this.reportService.create(
      createReportDto,
      imagesGroups,
      notesGroups,
    );
  }

  @Get()
  findAll() {
    return this.reportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
    return this.reportService.update(+id, updateReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportService.remove(+id);
  }
}
