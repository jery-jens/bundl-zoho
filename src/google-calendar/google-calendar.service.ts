import { Injectable } from '@nestjs/common';

let lastData = {};
let lastTimestamp = 0;

@Injectable()
export class GoogleCalendarService {    
    testApp(): any {
        return {
            "test": "test"
        }
    }

    public processMails(attendees, names): any {
        const timestamp = Date.now();

        if (timestamp === lastTimestamp) {
            lastData = {
                mail: null,
                allAttendees: [null],
                notBundlAttendees: [null],
                attendeesToAddToZOHO: [null]
            }
    
            return lastData;
        };

        lastTimestamp = timestamp;

        const allAttendees = attendees.split(",") || [];
        let mailPlaceholder = "";

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