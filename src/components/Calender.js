import React, { useEffect, useState } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
//let allViews = Object.keys(Calendar.Views).map((k) => Calendar.Views[k]);

const localizer = momentLocalizer(moment);
const CalenderScheduler = ({events}) => {

  


console.log(events)


  // startdate.setMonth(startdate.getMonth() - 1);

  
// const date = moment(startdate).format(`YYYY,MM,DD`).replace(/\b0/g, "");

// let year = moment(startdate).format('YYYY')
// console.log(year)
// let month = moment(startdate).format("MM");
// console.log(month);

// let convertedmonth = parseInt(month);
// let day = moment(startdate).format("DD");
// console.log(day);

// console.log(date);


// const newdate = parseInt(date);

// console.log(newdate)
  



  




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
            title: data.EventName,
            start: new Date(
              data.convertedyear,
              data.convertedmonth,
              data.convertedday,
              data?.Starttime
            ),
            end: new Date(
              data.convertedyear,
              data.convertedmonth,
              data.convertedday,
              data?.Endtime
            ),
          };


          
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
