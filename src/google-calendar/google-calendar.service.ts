import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleCalendarService {
    testApp(): any {
        return {
            "test": "test"
        };
    }
}
