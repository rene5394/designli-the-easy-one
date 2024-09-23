import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { SesDto } from './ses.dto';

export class RecordDto {
  @IsString()
  eventVersion: string;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => SesDto)
  ses: SesDto;

  @IsString()
  eventSource: string;
}
