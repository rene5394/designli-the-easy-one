import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CommonHeaderDto {
  @IsString()
  @IsNotEmpty()
  returnPath: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  from: string[];

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  to: string[];

  @IsString()
  @IsNotEmpty()
  messageId: string;

  @IsString()
  @IsNotEmpty()
  subject: string;
}
