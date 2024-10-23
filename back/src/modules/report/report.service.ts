// src/modules/report/report.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from '../../entities/Report.entity';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
  ) {}

  // Method to create a report
  async createReport(data: Partial<Report>): Promise<Report> {
    const report = this.reportRepository.create(data);
    return this.reportRepository.save(report);
  }

  // Method to find all reports
  async findAllReports(): Promise<Report[]> {
    return this.reportRepository.find();
  }

  // Method to find a report by ID
  async findReportById(id: number): Promise<Report> {
    return this.reportRepository.findOne({ where: { id } });
  }

  // Method to update a report
  async updateReport(id: number, data: Partial<Report>): Promise<Report> {
    await this.reportRepository.update(id, data);
    return this.reportRepository.findOne({ where: { id } });
  }

  // Method to delete a report
  async deleteReport(id: number): Promise<void> {
    await this.reportRepository.delete(id);
  }
}
