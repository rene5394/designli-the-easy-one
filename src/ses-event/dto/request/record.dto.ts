import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { SesDto } from './ses.dto';

export class RecordDto {
  @IsString()
  eventVersion: string;

  @ValidateNested()
  @Type(() => SesDto)
  ses: string;

  @IsString()
  eventSource: string;
}
