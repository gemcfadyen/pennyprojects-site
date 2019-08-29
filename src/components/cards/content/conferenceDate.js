import React from "react";

const ConferenceDetails = ({event, location, date}) =>
  (<div>
      <div>
        👩🏼‍🏫 {event}
      </div>
      <div>
        📅 {date}
      </div>
      <div>
        🌍 {location}
      </div>
    </div>
  );


export default ConferenceDetails;