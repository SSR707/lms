import { Module } from '@nestjs/common';
import { SendSMS } from './sendSms';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [SendSMS],
  exports:[SmsModule]
})
export class SmsModule {}