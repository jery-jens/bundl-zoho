import { Module } from '@nestjs/common';
import { GoogleCalendarController } from './google-calendar/google-calendar.controller';
import { GoogleCalendarModule } from './google-calendar/google-calendar.module';
import { GoogleCalendarService } from './google-calendar/google-calendar.service';

@Module({
  imports:  [GoogleCalendarModule],
  controllers: [GoogleCalendarController],
  providers: [GoogleCalendarService],
})
export class AppModule {}
