import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
  create(@Body() createReportDto: any) {
    return this.reportService.create(createReportDto);
  }

  @Get()
  findAll() {
    return this.reportService.findAll();
  }

  @Get('mbl_code')
  mbl_code() {
    return this.reportService.mbl_code();
  }

  @Get(':mbl_code')
  findOne(@Param('mbl_code') mbl_code: string) {
    return this.reportService.findOne(mbl_code);
  }

  @Get('download/:mbl_code')
  dowload(@Param('mbl_code') mbl_code: string) {
    return this.reportService.download(mbl_code);
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
