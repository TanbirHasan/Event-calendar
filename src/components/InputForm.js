import React, { useState } from "react";
import { Formik } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";


import CalenderScheduler from "./Calender";


const date = moment().format("YYYY-MM-dd");


const InputForm = () => {


 const [event,setEvent] = useState([])
 const [prevevent,setPrevevent] = useState([])
  const [startDate, setStartDate] = useState(new Date());




 const Submitdata = (data) => {
  

    // setStartTime(StartTime);
    // setEvent(event);
    // setEndTime(EndedTime)


  

    const events = [...event,data]
    console.log(events);


 
    setEvent(events);




 }


 const add = (data, StartTime) => {
   const { length } = event;
   const id = length + 1;
   const found = event.some((el) => el.Starttime === StartTime);
   if (!found) {
      const events = [...event, data];
      console.log(events);

      setEvent(events);
   }
  else{
    alert("The slot is already taken")
  }
 }


 const takingdate = (date) => {
  setStartDate(date);
 }




console.log(event);




















 return (
   <div className="Form-parent">
     <Formik
       initialValues={{ eventname: "", StartTime: "", EndedTime: "" }}
       validate={(values) => {
         const errors = {};
         if (!values.eventname) {
           errors.email = "Required";
         } else if (!values.StartTime) {
           errors.StartTime = "Required";
         } else if (!values.EndedTime) {
           errors.EndedTime = "Required";
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting,resetForm }) => {
         //  console.log(values.StartTime.slice(0,5));
         const EventName = values.eventname;
         const Starttime = parseInt(values.StartTime?.slice(0, 5));
         const Endtime = parseInt(values.EndedTime);
         

           startDate.setMonth(startDate.getMonth() - 1);

           const date = moment(startDate)
             .format(`YYYY,MM,DD`)
             .replace(/\b0/g, "");


             const startdate = date;
           

             let year = moment(startdate).format("YYYY");
             console.log(year);
             let month = moment(startdate).format("MM");
             console.log(month);
              let day = moment(startdate).format("DD");
               console.log(day);


             let convertedyear = parseInt(year);


             let convertedmonth = parseInt(month);
             let convertedday = parseInt(day); 
            
        

             console.log(date);

         const events = {
           EventName,
           Starttime,
           Endtime,
           convertedyear,
           convertedmonth,
           convertedday,
         };

       

         setTimeout(() => {
          //  alert(JSON.stringify(values, null, 2));
           add(events, Starttime);
            setStartDate(new Date());
          resetForm();

            
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} className="form">
           <label>
             <strong>Enter Event Name</strong>
           </label>
           <input
             type="text"
             name="eventname"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.eventname}
           />
           {errors.eventname && touched.eventname && errors.eventname}
           <label>Enter Start Date and Time</label>
           <input
             type="text"
             name="StartTime"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.StartTime}
           />
           {errors.StartTime && touched.StartTime && errors.StartTime}
           <label>Enter End Date and Time</label>
           <input
             type="text"
             name="EndedTime"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.EndedTime}
           />
           {errors.EndedTime && touched.EndedTime && errors.EndedTime}
           <label>Select Date</label>
           <div className="date">
             <DatePicker
               selected={startDate}
               onChange={(date) => takingdate(date)}
               dateFormat="yyyy-MM-dd"
              
             />
           </div>

           <button type="submit" className="btn btn-success">
             Submit
           </button>
         </form>
       )}
     </Formik>
     <CalenderScheduler events={event} />
   </div>
 );};

export default InputForm;
