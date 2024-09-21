import {
  IsArray,
  IsBoolean,
  IsDate,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CommonHeaderDto } from './common-headers.dto';
import { HeaderDto } from './header.dto';

export class MailDto {
  @IsDate()
  timestamp: Date;

  @IsString()
  source: string;

  @IsString()
  messageId: string;

  @IsArray()
  @IsString({ each: true })
  destination: string[];

  @IsBoolean()
  headersTruncated: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HeaderDto)
  headers: HeaderDto[];

  @ValidateNested()
  @Type(() => CommonHeaderDto)
  commonHeaders: CommonHeaderDto;
}
