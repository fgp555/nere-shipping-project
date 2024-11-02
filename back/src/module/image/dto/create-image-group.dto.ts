import { IsArray, IsString } from 'class-validator';

export class CreateImageGroupDto {
  @IsString()
  group_name: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsArray()
  @IsString({ each: true })
  images_notes: string[];
}
