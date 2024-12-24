import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Twilio from 'twilio';

@Injectable()
export class SendSMS {
  private client: Twilio.Twilio;

  constructor(private configService: ConfigService) {
    this.client = Twilio(
      this.configService.get<string>('TWILIO_ACCOUNT_SID'),
      this.configService.get<string>('TWILIO_AUTH_TOKEN'),
    );
  }

  async sendOtp(to: string, otp: string): Promise<any> {
    try {
      const message = await this.client.messages.create({
        body: `Your OTP code is: ${otp}`,
        from: this.configService.get<string>('TWILIO_PHONE_NUMBER'),
        to,
      });
      return message;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
