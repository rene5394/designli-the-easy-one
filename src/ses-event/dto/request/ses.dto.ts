import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MailDto } from './mail.dto';
import { ReceiptDto } from './receipt.dto';

export class SesDto {
  @ValidateNested()
  @IsNotEmpty()
  @Type(() => ReceiptDto)
  receipt: ReceiptDto;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => MailDto)
  mail: MailDto;
}
