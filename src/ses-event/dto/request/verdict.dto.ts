import { IsNotEmpty, IsString } from 'class-validator';

export class VerdictDto {
  @IsString()
  @IsNotEmpty()
  status: string;
}
