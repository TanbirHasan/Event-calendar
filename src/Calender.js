import React from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
//let allViews = Object.keys(Calendar.Views).map((k) => Calendar.Views[k]);

const localizer = momentLocalizer(moment);
const CalenderScheduler = () => {
 
  return (
    <div className="" style={{ minHeight: 580 }}>
      <Calendar
        events={[
          {
            title: "My event",
            allDay: false,
            start: new Date(2022, 5, 23, 12, 0),
            end: new Date(2022, 5, 23, 14, 0),
          },
        ]}
        defaultView="week"
        localizer={localizer}
        step={60}
        showMultiDayTimes
        defaultDate={new Date()}
        style={{ minHeight: 580 }}
      />
    </div>
  );
};

export default CalenderScheduler;
