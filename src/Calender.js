import React from "react";


import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
//let allViews = Object.keys(Calendar.Views).map((k) => Calendar.Views[k]);

const localizer = momentLocalizer(moment)
function CalenderScheduler() {
  const events = [
    {
      id: 0,
      name: "Holiday",
      description: "this is description",
      allDay: true,
      start: new Date("2022-06-22"),
      end: new Date("2022-06-22"),
    },
  ];
  const event = ({ event }) => {
    return (
      <div>
        {event.name} <br /> <small>{event.description}</small>{" "}
      </div>
    );
  };
  return (
    <div className="" style={{ minHeight: 580 }}>
      <Calendar
        events={events}
        defaultView="week"
        localizer={localizer}
        step={60}
        showMultiDayTimes
        defaultDate={new Date(2015, 3, 1)}
        style={{ minHeight: 580 }}
        components={{
          event: event,
        }}
      />
    </div>
  );
}


export default CalenderScheduler;