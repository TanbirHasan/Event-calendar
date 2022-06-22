import React from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
//let allViews = Object?.keys(Calendar?.Views).map((k) => Calendar?.Views[k]);

const localizer = momentLocalizer(moment);
function CalenderScheduler() {
  const events = [
    {
      id: 0,
      title: "Teste",
      allDay: false,
      startDate: new Date(2018, 7, 23, 8, 0, 0, 0),
      endDate: new Date(2018, 7, 23, 9, 0, 0, 0),
    },
    {
      id: 1,
      allDay: false,
      title: "Teste2",
      startDate: new Date(2018, 7, 23, 11, 0, 0, 0),
      endDate: new Date(2018, 7, 23, 12, 0, 0, 0),
    },
    {
      id: 1,
      allDay: false,
      title: "",
      startDate: new Date(2018, 7, 23, 13, 0, 0, 0),
      endDate: new Date(2018, 7, 23, 14, 0, 0, 0),
    },
    {
      id: 1,
      allDay: false,
      title: "",
      startDate: new Date(2018, 7, 23, 15, 0, 0, 0),
      endDate: new Date(2018, 7, 23, 16, 0, 0, 0),
    },
    {
      id: 0,
      title: "",
      allDay: false,
      startDate: new Date(2018, 7, 18, 8, 0, 0, 0),
      endDate: new Date(2018, 7, 18, 9, 0, 0, 0),
    },
  ];
  const event = ({ event }) => {
    return (
      <div>
        {event.name} <br /> <small>{event.description}</small>
        <br />
        <h4>Start-Time : {event.Starttime}</h4>
        <br />
        <h4>End-Time : {event.Endtime}</h4>
      </div>
    );
  };
  return (
    <div className="" style={{ minHeight: 580 }}>
      <Calendar
        events={events}
        localizer={localizer}
        defaultView="week"
        views={["week", "month"]}
        startAccessor="startDate"
        endAccessor="endDate"
        components={{
          event: event,
        }}
      />
    </div>
  );
}

export default CalenderScheduler;
