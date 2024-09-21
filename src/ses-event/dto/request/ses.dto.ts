import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MailDto } from './mail.dto';
import { ReceiptDto } from './receipt.dto';

export class SesDto {
  @ValidateNested()
  @Type(() => ReceiptDto)
  receipt: ReceiptDto;

  @ValidateNested()
  @Type(() => MailDto)
  mail: MailDto;
}
