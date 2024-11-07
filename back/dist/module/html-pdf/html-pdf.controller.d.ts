import { HtmlPdfService } from './html-pdf.service';
import { Response } from 'express';
import { ReportService } from '../report/report.service';
import { Request } from 'express';
export declare class HtmlPdfController {
    private readonly htmlPdfService;
    private readonly reportService;
    constructor(htmlPdfService: HtmlPdfService, reportService: ReportService);
    findAll(): string;
    download_test(res: Response): Promise<void>;
    download_template(res: Response): Promise<void>;
    render_template(mbl_code: string, res: Response, request: Request): Promise<void>;
    download(mbl_code: string, res: Response, request: Request): Promise<void>;
    findOne(mbl_code: string): Promise<import("../report/entities/report.entity").ReportEntity>;
    private findOne_mbl_code;
    private getBase64Image;
}
