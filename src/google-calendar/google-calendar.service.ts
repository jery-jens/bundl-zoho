import { Injectable } from '@nestjs/common';

let lastData = {};

@Injectable()
export class GoogleCalendarService {    
    testApp(): any {
        return {
            "test": "test"
        }
    }

    public processMails(attendees, names): any {
        const allAttendees = attendees.split(",") || [];
        const allNames = names.split(",") || [];

        // To be filled in
        const connectedWithNames = [];
        const possibleAttendeesToAdd = [];
        
        for (let i = 0; i < allAttendees.length; i++) {
            const mailPlaceholder = "chep.com";
            const attendeeInfo = {mail: allAttendees[i], name: allNames[i]};

            connectedWithNames.push(attendeeInfo);

            if (allAttendees[i].includes(mailPlaceholder)) {
               possibleAttendeesToAdd.push(attendeeInfo);
            }
        }

        lastData = {
            allAttendees: connectedWithNames,
            attendeesFromCHEP: possibleAttendeesToAdd,
            attendeesToAddToZOHO: [null]
        }

        return lastData;
    }

    public getMails(): any {
        return lastData;
    }
}