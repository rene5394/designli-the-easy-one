import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ActionDto } from './action.dto';
import { VerdictDto } from './verdict.dto';

export class ReceiptDto {
  @IsDateString()
  @IsNotEmpty()
  timestamp: string;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  processingTimeMillis: number;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  recipients: string[];

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => VerdictDto)
  spamVerdict: VerdictDto;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => VerdictDto)
  virusVerdict: VerdictDto;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => VerdictDto)
  spfVerdict: VerdictDto;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => VerdictDto)
  dkimVerdict: VerdictDto;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => VerdictDto)
  dmarcVerdict: VerdictDto;

  @IsString()
  @IsNotEmpty()
  dmarcPolicy: string;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => ActionDto)
  action: ActionDto;
}
