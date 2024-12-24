import { Controller, Post, Body, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpAuthDto } from './dto/signup-auth.dto';
import { OtpDto } from 'src/otp/otp.dto';

import { Itoken } from 'src/common/token.interface';
import {
  IforgetPassword,
  IRestorationPassword,
} from 'src/common/forget.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  register(@Body() createAuthDto: SignUpAuthDto, @Query() key:string) {
    return this.authService.create(createAuthDto, key);
  }

  @Post('signin')
  login(@Body() createAuthDto: SignUpAuthDto) {
    return this.authService.login(createAuthDto);
  }
  @Post('active/otp')
  actioveOtp(@Body() otp: OtpDto) {
    return this.authService.activeOtp(otp);
  }
  @Post('refresh/token')
  refreshToken(@Body() token: Itoken) {
    return this.authService.refreshToken(token);
  }
  @Post('forget-password')
  forgetPassword(@Body() forgetPassword: IforgetPassword) {
    return this.authService.forgerEmail(forgetPassword);
  }
  @Post('restoration/password')
  restorationPassword(@Body() changePassword: IRestorationPassword) {
    return this.authService.restorationPassword(changePassword);
  }
}
