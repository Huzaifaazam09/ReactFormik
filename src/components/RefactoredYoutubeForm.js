import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: "huzaifa",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema  = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().required('Required!'),
  channel: Yup.string().required('Required!')
})

function RefactoredYoutubeForm() {

  // console.log("Form Errors", formik.touched);

  return (
    <Formik 
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}>

      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
          />
          <ErrorMessage name="name"/>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field
            type="email"
            id="email"
            name="email"
          />
          <ErrorMessage name="email"/>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
          />
         <ErrorMessage name="channel"/>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default RefactoredYoutubeForm;
