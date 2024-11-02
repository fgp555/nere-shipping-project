// back/src/module/t4_unstuffing/dto/create-t4_unstuffing.dto.ts

import { Type } from "class-transformer";
import { IsArray, IsString, ValidateNested } from "class-validator";
import { CreateImageGroupDto } from "src/module/image/dto/create-image-group.dto";

export class CreateT4UnstuffingDto {
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
