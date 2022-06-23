import React from "react";
import { Formik } from "formik";

const InputForm = () => (
  <div className="Form-parent">
 
    <Formik
      initialValues={{ eventname: "", StartTime: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.eventname) {
          errors.email = "Required";
        } else if (!values.StartTime) {
          errors.StartTime = "Required";
        } else if (!values.EndTime) {
          errors.EndTime = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
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
            name="EndTime"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.EndTime}
          />
          {errors.EndTime && touched.EndTime && errors.EndTime}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default InputForm;
