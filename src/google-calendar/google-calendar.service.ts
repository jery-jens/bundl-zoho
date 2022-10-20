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
        let mailPlaceholder = "";

        // To be filled in
        const connectedWithNames = [];
        const possibleAttendeesToAdd = [];
        
        for (let i = 0; i < allAttendees.length; i++) {
            const name = allAttendees[i].split("@")[0].replace(".", " ");
            const formalName = name.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase());
            const attendeeInfo = {mail: allAttendees[i], name: formalName};

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