import { IsNumber, IsOptional, IsString } from 'class-validator';

export class OtpDto {
  @IsString()
  otp_code: string;

  @IsNumber()
  @IsOptional()
  user_id: number;

  @IsString()
  @IsOptional()
  email:string

  @IsString()
  @IsOptional()
  phone:string
  @IsString()
  type: string;
}
