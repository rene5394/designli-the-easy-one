import { IsArray } from 'class-validator';
import { RecordDto } from './record.dto';
import { Type } from 'class-transformer';

export class SesEventRequestDto {
  @IsArray()
  @Type(() => RecordDto)
  Records: RecordDto[];
}
