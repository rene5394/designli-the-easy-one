import { IsArray, ValidateNested } from 'class-validator';
import { RecordDto } from './record.dto';
import { Type } from 'class-transformer';

export class SesEventRequestDto {
  @ValidateNested()
  @IsArray()
  @Type(() => RecordDto)
  Records: RecordDto[];
}
