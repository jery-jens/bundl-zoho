import { Controller, Get } from '@nestjs/common';
import { GoogleCalendarService } from './google-calendar.service';

@Controller('google-calendar')
export class GoogleCalendarController {
    constructor(private readonly googleCalendarService: GoogleCalendarService) {}

    @Get()
    test(): string {
      return this.googleCalendarService.testApp();
    }
}
