import React from 'react';
import { Formik, Field, Form } from 'formik';

export const FormPhonebookName = ({onCangeName}) =>{
    return (
        <Formik
        initialValues={{
            name: '',
            number: ''
          
        }}
        onSubmit={(value, action) => {
            onCangeName(value)
            action.resetForm()
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Jane" />
  
          <label htmlFor="contacts">Number</label>
          <Field type="tel" name="number" required />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    )
}