export declare class HtmlPdfService {
    generatePdf(data: any): Promise<Buffer>;
    generatePdfHeadFooter(data: any): Promise<Buffer>;
    findAll(): string;
    download(): string;
}
