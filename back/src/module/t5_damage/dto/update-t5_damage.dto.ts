import { PartialType } from '@nestjs/mapped-types';
import { CreateT5DamageDto } from './create-t5_damage.dto';

export class UpdateT5DamageDto extends PartialType(CreateT5DamageDto) {}
