import { HtmlPdfService } from './html-pdf.service';
import { Response } from 'express';
import { ReportService } from '../report/report.service';
export declare class HtmlPdfController {
    private readonly htmlPdfService;
    private readonly reportService;
    constructor(htmlPdfService: HtmlPdfService, reportService: ReportService);
    createPdf(res: Response): Promise<void>;
    findAll(): string;
    download(mbl_code: string, res: Response): Promise<void>;
    findOne(mbl_code: string): Promise<import("../report/entities/report.entity").ReportEntity>;
    private findOne_mbl_code;
    private getBase64Image;
}
