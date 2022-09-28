import { Body, Controller, Get, Post } from '@nestjs/common';
import { GoogleCalendar } from './google-calendar.interface';
import { GoogleCalendarService } from './google-calendar.service';

@Controller('google-calendar')
export class GoogleCalendarController {
    constructor(private readonly googleCalendarService: GoogleCalendarService) {}

    @Get()
    test(): string {
      return this.googleCalendarService.testApp();
    }

    @Get('get-mails')
    public getMails(): any {
      return this.googleCalendarService.getMails();
    }

    @Post('put-mails-into-account')
    public putMailsIntoAccount(@Body() body: GoogleCalendar): void {
      return this.googleCalendarService.processMails(body.attendees, body.attendees_names);
    }
}
