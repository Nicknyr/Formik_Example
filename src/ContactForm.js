import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CONTAINER = styled.div`
  background: #778beb;
  height: auto;
  width: 80%;
  margin: 10em auto;
  color: snow;

  label {
    font-size: 1.4em;
    font-weight: 400;
  }

  .has-error {
    border: 2px solid #c44569;
  }
`;

const MYFORM = styled(Form)`
  width: 40%;
  text-align: left;
  padding-top: 5em;
  padding-bottom: 5em;
`;

const BUTTON = styled(Button)`
  background: #63cdda;
  border: none;
  font-size: 1.2em;
  font-weight: 400;

  &:hover {
    background: #3dc1d3;
  }
`;

// RegEx for phone number validation
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

// Schema for yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, "Names must has at least 2 characters")
  .max(100, "Names can't be longer than 100 characters")
  .required("Name is required"),
  email: Yup.string()
  .email("Must be a valid email address")
  .max(100, "Email must be less than 100 characters")
  .required("Email is required"),
  phone: Yup.string()
  .matches(phoneRegExp, "Phone number is not valid")
  .required("Phone number required"),
  blog: Yup.string()
  .url("Must enter URL")
  .required("URL required")
});

const ContactForm = () => {
  return(
    <CONTAINER>
    <Formik
      initialValues={{ name:"", email:"", phone:"", blog:""}}
      validationSchema={validationSchema}
    >
      {( {values, errors, touched, handleChange, handleBlur }) => (
        <MYFORM className="mx-auto">
          <Form.Group controlId="formName">
            <Form.Label>Name :</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={touched.name && errors.name ? "has-error" : null}
              />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email :</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "has-error" : null}
               />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone :</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              className={touched.phone && errors.phone ? "has-error" : null}
               />
          </Form.Group>
          <Form.Group controlId="formBlog">
            <Form.Label>Blog :</Form.Label>
            <Form.Control
              type="text"
              name="blog"
              placeholder="Blog URL"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.blog}
              className={touched.blog && errors.blog ? "has-error" : null}
              />
          </Form.Group>

          <BUTTON variant="primary" type="submit">
            Submit
          </BUTTON>
        </MYFORM>
      )}
    </Formik>
    </CONTAINER>
  );
}

export default ContactForm;
