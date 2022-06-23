import React, { useState } from "react";
import { Formik } from "formik";

import DateTimePicker from "react-datetime-picker";
import CalenderScheduler from "./Calender";

const InputForm = () => {

 const [value, onChange] = useState(new Date());
 const [event,setEvent] = useState([])
 const [prevevent,setPrevevent] = useState([])




 const Submitdata = (data) => {
  

    // setStartTime(StartTime);
    // setEvent(event);
    // setEndTime(EndedTime)


    const events = [...event,data]
    console.log(events);

 
    setEvent(events);




  


    


 }


console.log(event);

 return (
   <div className="Form-parent">
     <Formik
       initialValues={{ eventname: "", StartTime: "",EndedTime:"" }}
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
       onSubmit={(values, { setSubmitting }) => {
      //  console.log(values.StartTime.slice(0,5));
      const EventName = values.eventname;
        const Starttime = parseInt(values.StartTime?.slice(0, 5));
         const Endtime = parseInt(values.EndedTime);

         const events = { EventName, Starttime, Endtime };
     
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           Submitdata(events);
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
           <label>Enter Event Name</label>
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
         
           <button type="submit" >
             Submit
           </button>
         </form>
       )}
     </Formik>
     <CalenderScheduler events={event} />
   </div>
 );};

export default InputForm;
