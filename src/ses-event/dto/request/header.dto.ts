import { IsNotEmpty, IsString } from 'class-validator';

export class HeaderDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  value: string;
}
