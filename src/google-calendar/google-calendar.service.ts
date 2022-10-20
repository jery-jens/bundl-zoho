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
        let mailPlaceholder = "";

        // To be filled in
        const connectedWithNames = [];
        const possibleAttendeesToAdd = [];
        
        for (let i = 0; i < allAttendees.length; i++) {
            const attendeeInfo = {mail: allAttendees[i], name: allAttendees[i].split("@")[0]};

            connectedWithNames.push(attendeeInfo);

            if (!allAttendees[i].includes("bundl")) {
               possibleAttendeesToAdd.push(attendeeInfo);
               mailPlaceholder = allAttendees[i].split("@")[1].split(".")[0];
            };
        }

        lastData = {
            mail: mailPlaceholder,
            allAttendees: connectedWithNames,
            notBundlAttendees: possibleAttendeesToAdd,
            attendeesToAddToZOHO: [null]
        }

        return lastData;
    }

    public getMails(): any {
        return lastData;
    }
}