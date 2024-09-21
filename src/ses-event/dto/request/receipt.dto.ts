import {
  IsArray,
  IsDate,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ActionDto } from './action.dto';
import { VerdictDto } from './verdict.dto';

export class ReceiptDto {
  @IsDate()
  timestamp: Date;

  @IsNumber()
  processingTimeMillis: number;

  @IsArray()
  @IsString({ each: true })
  recipients: string[];

  @ValidateNested()
  @Type(() => VerdictDto)
  spamVerdict: VerdictDto;

  @ValidateNested()
  @Type(() => VerdictDto)
  virusVerdict: VerdictDto;

  @ValidateNested()
  @Type(() => VerdictDto)
  spfVerdict: VerdictDto;

  @ValidateNested()
  @Type(() => VerdictDto)
  dkimVerdict: VerdictDto;

  @ValidateNested()
  @Type(() => VerdictDto)
  dmarcVerdict: VerdictDto;

  @ValidateNested()
  @Type(() => VerdictDto)
  dmarcPolicy: string;

  @ValidateNested()
  @Type(() => ActionDto)
  action: ActionDto;
}
