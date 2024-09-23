import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CommonHeaderDto } from './common-headers.dto';
import { HeaderDto } from './header.dto';

export class MailDto {
  @IsDateString()
  @IsNotEmpty()
  timestamp: string;

  @IsString()
  @IsNotEmpty()
  source: string;

  @IsString()
  @IsNotEmpty()
  messageId: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  destination: string[];

  @IsBoolean()
  @IsNotEmpty()
  headersTruncated: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @IsNotEmpty()
  @Type(() => HeaderDto)
  headers: HeaderDto[];

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => CommonHeaderDto)
  commonHeaders: CommonHeaderDto;
}
