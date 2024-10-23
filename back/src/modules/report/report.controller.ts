// src/modules/report/report.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ReportService } from './report.service';
import { Report } from '../../entities/Report.entity';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
  async create(@Body() createReportDto: Partial<Report>): Promise<Report> {
    return this.reportService.createReport(createReportDto);
  }

  @Get()
  async findAll(): Promise<Report[]> {
    return this.reportService.findAllReports();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Report> {
    return this.reportService.findReportById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateReportDto: Partial<Report>): Promise<Report> {
    return this.reportService.updateReport(id, updateReportDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.reportService.deleteReport(id);
  }
}
