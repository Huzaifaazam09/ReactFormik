import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from 'yup';
import TextError from "./TextError";

const initialValues = {
  name: "Huzaifa",
  email: "",
  channel: "",
  Comments: "",
  social:{
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['',''],
  phNumbers: ['']
};

const savedValues = {
    name: "Salar",
    email: "salarsikandar@gmail.com",
    channel: "Peer e kamil",
    Comments: "welcome",
    social:{
      facebook: '',
      twitter: ''
    },
    phoneNumbers: ['',''],
    phNumbers: ['']
  };

const onSubmit = (values, onSubmitProps) => {
  console.log("Form data", values);
  console.log("Submit Props", onSubmitProps);
  onSubmitProps.setSubmitting(false)
  onSubmitProps.resetForm()
};

const validationSchema  = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().required('Required!'),
  channel: Yup.string().required('Required!'),
})

const validateComments = value =>{
    let error 
    if(!value) {
        error = 'Requireddddd'
    } 
    return error 
}

function NewYoutubeForm() {
    const [formValues, setFormValues] = useState(null)
  // console.log("Form Errors", formik.touched);

  return (
    <Formik 
    initialValues={ formValues || initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    enableReinitialize  

    >
     {
        formik => {
            console.log('Formik Props', formik)
            return(
                <Form>
                <div className="form-control">
                  <label htmlFor="name">Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                  />
                  <ErrorMessage name="name" component={TextError}/>
                </div>
        
                <div className="form-control">
                  <label htmlFor="email">E-mail</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                  />
                  <ErrorMessage name="email" component={TextError}>
                   
                  </ErrorMessage>
                </div>
        
                <div className="form-control">
                  <label htmlFor="channel">Channel</label>
                  <Field
                    type="text"
                    id="channel"
                    name="channel"
                    placeholder="Youtube Channel Name"
                  />
                 <ErrorMessage name="channel" component={TextError}/>
                </div>
        
                <div className="form-control">
                    <label htmlFor="comments">Comments</label>
                    <Field
                    as = "textarea"
                    id="comments"
                    name="comments"
                    validate={validateComments}
                    />
                    <ErrorMessage name="comments" component={TextError}/>
                </div>
        
                <div className="form-control">
                    <label htmlFor="facebook">Facebook Profile</label>
                    <Field 
                    type= 'text'
                    id= 'facebook'
                    name= 'social.facebook'/>
                </div>
        
                <div className="form-control">
                    <label htmlFor="twitter">Twitter Profile</label>
                    <Field 
                    type= 'text'
                    id= 'twitter'
                    name= 'social.twitter'/>
                </div>
        
                <div className="form-control">
                    <label htmlFor="primaryNumber">Primary Phone Number</label>
                    <Field 
                    type= 'text'
                    id= 'primaryNumber'
                    name= 'phoneNumbers[0]'/>
                </div>
        
                <div className="form-control">
                    <label htmlFor="secondaryNumber">Secondary Phone Number</label>
                    <Field 
                    type= 'text'
                    id= 'secondaryNumber'
                    name= 'phoneNumbers[1]'/>
                </div>
        
                <div className="form-control">
                    <label>List of Ph Numbers</label>
                    <FieldArray name="phNumbers">
                        {
                            (fieldPropsArray) =>{
                                // console.log('fieldPropsArray', fieldPropsArray) 
                                const {push , remove, form} = fieldPropsArray
                                const {values} = form
                                const {phNumbers} = values
                                return (
                                <div>
                                    {
                                        phNumbers.map((phNumber, index) =>(
                                            <div key={index}>
                                                <Field name={`phNumbers[${index}]`}/>
                                                {
                                                    index > 0 &&
                                                <button type="button" onClick={() => remove(index)}> - </button>
                                                }
                                                <button type="button" onClick={() => push('')}> + </button>
                                            </div>
                                        ))
                                    }
                                </div>
                                )
                            }
                        }
                    </FieldArray>
                </div>
        
                <button type="submit" disabled={! formik.isValid || formik.isSubmitting}>Submit</button>
                <button type="submit" onClick={() => setFormValues(savedValues)}>Load Saved Data</button>
                <button type="reset">Reset</button>
              </Form>
            )
        }
     }   

     
    </Formik>
  );
}

export default NewYoutubeForm;
