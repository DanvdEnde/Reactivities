import React from "react";
import { List, Image, Popup } from "semantic-ui-react";
import { IAttendee } from "../../../app/models/activity";

interface IProps {
  attendees: IAttendee[];
}

export const ActivityListItemAttendees: React.FC<IProps> = ({ attendees }) => {
  return (
    <div>
      <List horizontal>
        {attendees.map(attendee => (
          <List.Item key={attendee.username}>
            <Popup
              header={attendee.displayname}
              trigger={
                <Image
                  size="mini"
                  circular
                  src={attendee.image || "assets/user.png"}
                />
              }
            />
          </List.Item>
        ))}
      </List>
    </div>
  );
};