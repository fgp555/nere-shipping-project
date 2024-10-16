import { HtmlPdfService } from '../html-pdf/html-pdf.service';
import { Response } from 'express';
import { PreDamageService } from './5pre-damage.service';
import { PreDamageEntity } from './entity-dtos/5pre-damage.entity';
export declare class PreDamageController {
    private readonly pdfService;
    private readonly finalReportService;
    constructor(pdfService: HtmlPdfService, finalReportService: PreDamageService);
    findAll(): Promise<PreDamageEntity[]>;
    findByMBL(mbl: string): Promise<PreDamageEntity>;
    findAllByMBL(mbl: string): Promise<PreDamageEntity[]>;
    findOne(id: number): Promise<PreDamageEntity>;
    create(finalReport: PreDamageEntity, images: Express.Multer.File[]): Promise<PreDamageEntity>;
    update(id: number, finalReport: PreDamageEntity, images: Express.Multer.File[]): Promise<PreDamageEntity>;
    remove(id: number): Promise<void>;
    generatePdfByMBL(res: Response, mbl: string): Promise<void>;
    private getBase64Image;
}
