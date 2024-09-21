import {
  IsArray,
  IsDate,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ActionDto } from './action.dto';
import { VeredictDto } from './veredict.dto';

export class ReceiptDto {
  @IsDate()
  timestamp: Date;

  @IsNumber()
  processingTimeMillis: number;

  @IsArray()
  @IsString({ each: true })
  recipients: string[];

  @ValidateNested()
  @Type(() => VeredictDto)
  spamVerdict: VeredictDto;

  @ValidateNested()
  @Type(() => VeredictDto)
  virusVerdict: VeredictDto;

  @ValidateNested()
  @Type(() => VeredictDto)
  spfVerdict: VeredictDto;

  @ValidateNested()
  @Type(() => VeredictDto)
  dkimVerdict: VeredictDto;

  @ValidateNested()
  @Type(() => VeredictDto)
  dmarcVerdict: VeredictDto;

  @ValidateNested()
  @Type(() => VeredictDto)
  dmarcPolicy: string;

  @ValidateNested()
  @Type(() => ActionDto)
  action: ActionDto;
}
