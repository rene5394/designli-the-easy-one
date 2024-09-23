import { IsNotEmpty, IsString } from 'class-validator';

export class ActionDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  topicArn: string;
}
