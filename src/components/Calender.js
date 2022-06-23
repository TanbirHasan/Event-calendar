import React, { useState } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
//let allViews = Object.keys(Calendar.Views).map((k) => Calendar.Views[k]);

const localizer = momentLocalizer(moment);
const CalenderScheduler = ({events,startdate}) => {





  console.log(startdate)
  


  




  // const eventss = [
  //  {
  //     title: events?.EventName,
  //     allDay: false,
  //     start: new Date(2022, 5, 23, events?.Starttime),
  //     end: new Date(2022, 5, 23, events?.Endtime),
  //   },
  // ];


 
  return (
    <div className="Calendar" style={{ minHeight: 580,marginTop:'50px' }}>
      <Calendar
        events={events.map(data => {
       

          return {
            
           title : data.EventName,
           start : new Date(2022, 5, 23, data?.Starttime),
           end : new Date(2022, 5, 23, data?.Endtime),
           date : new Date(data.startDate)


          }
          
        })}
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
