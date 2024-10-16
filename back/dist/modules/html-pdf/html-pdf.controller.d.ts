import { Response } from 'express';
import { HtmlPdfService } from './html-pdf.service';
import { PreDamageService } from '../5pre-damage/5pre-damage.service';
export declare class HtmlPdfController {
    private readonly pdfService;
    private readonly finalReportService;
    constructor(pdfService: HtmlPdfService, finalReportService: PreDamageService);
    createPdf(data: any, res: Response): Promise<void>;
    generatePdf(res: Response, id: number): Promise<void>;
    private getBase64Image;
    private finalReportServiceFindOne;
}
