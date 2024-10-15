import { FinalReportService } from './final-report.service';
import { FinalReportEntity } from './entity-dtos/final-report.entity';
import { HtmlPdfService } from '../html-pdf/html-pdf.service';
import { Response } from 'express';
export declare class FinalReportController {
    private readonly pdfService;
    private readonly finalReportService;
    constructor(pdfService: HtmlPdfService, finalReportService: FinalReportService);
    findAll(): Promise<FinalReportEntity[]>;
    findByMBL(mbl: string): Promise<FinalReportEntity>;
    findAllByMBL(mbl: string): Promise<FinalReportEntity[]>;
    findOne(id: number): Promise<FinalReportEntity>;
    create(finalReport: FinalReportEntity, images: Express.Multer.File[]): Promise<FinalReportEntity>;
    update(id: number, finalReport: FinalReportEntity, images: Express.Multer.File[]): Promise<FinalReportEntity>;
    remove(id: number): Promise<void>;
    generatePdfByMBL(res: Response, mbl: string): Promise<void>;
    private getBase64Image;
}
