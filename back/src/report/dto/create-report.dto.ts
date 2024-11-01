import { IsArray, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateImageGroupDto } from './create-image-group.dto';

export class CreateReportDto {
  @IsArray()
  @IsString({ each: true })
  notes: string[];

  @IsString()
  foot_note: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateImageGroupDto)
  images_groups: CreateImageGroupDto[];
}
