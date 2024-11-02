import { PartialType } from '@nestjs/mapped-types';
import { CreateT4UnstuffingDto } from './create-t4_unstuffing.dto';

export class UpdateT4UnstuffingDto extends PartialType(CreateT4UnstuffingDto) {}
