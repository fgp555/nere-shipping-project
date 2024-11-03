import { PartialType } from '@nestjs/mapped-types';
import { CreateHtmlPdfDto } from './create-html-pdf.dto';

export class UpdateHtmlPdfDto extends PartialType(CreateHtmlPdfDto) {}
