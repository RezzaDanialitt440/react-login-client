import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Styles } from '../Styles';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup'

const CustomTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return(
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field}{...props}/>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>

  )
}


const registerUser = (fromData) => {
  axios
    .post("http://localhost:4000/api/auth/register", fromData)
    .then((resp) => {
      console.log("201: " + JSON.stringify(resp.data))
    })
    .catch((err) => {
      console.log("400: " + JSON.stringify(err));
    });
};

const RegisterPage = () => {
  
  return (
  <>
        <Styles>
          <Formik initialValues={{
            name: '',
            email: '',
            password: ''
          }}

          validationSchema={Yup.object({
            name: Yup.string().required('Please enter your name'),
            email: Yup.string().email('Invalid email format').required('Please enter your email'),
            password: Yup.string().trim().required('Please enter your password').min(12, 'Password must have at least 12 character').matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])(?=.*[a-zA-Z]).{12,}$/, 'Invalid Format'),
          })}

          onSubmit={(values, {resetForm}) => {
            registerUser(values)  
            resetForm();
              
          }}
          >  
            {props => (
              <Form>
                <h1> Sign Up</h1>
                <CustomTextInput label="Name" name="name" type="text" placeholder="Enter your name"/>
                <CustomTextInput label="Email" name="email" type="text" placeholder="Enter your email"/>
                <CustomTextInput label="Password" name="password" type="password" placeholder="Enter your password"/>
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </Styles>
  </>
  );
};

export default RegisterPage;
