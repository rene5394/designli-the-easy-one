import { IsArray, IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class SesEventResponseDto {
  @IsBoolean()
  @IsNotEmpty()
  spam: boolean;

  @IsBoolean()
  @IsNotEmpty()
  virus: boolean;

  @IsBoolean()
  @IsNotEmpty()
  dns: boolean;

  @IsString()
  @IsNotEmpty()
  mes: string;

  @IsBoolean()
  @IsNotEmpty()
  retrasado: boolean;

  @IsString()
  @IsNotEmpty()
  emisor: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  receptor: string[];
}
