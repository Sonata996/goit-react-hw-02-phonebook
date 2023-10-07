import React from 'react';
import { Formik, Field} from 'formik';
import * as Yup from 'yup';
import { Form ,ConteinerLabel,FormButton } from './InputName.styled';



const userSchema  = Yup.object().shape({
  number: Yup.number()
  .integer()
  .required('This field is required!'),
  name: Yup.string()
  .required('This field is required!')
})
export const FormPhonebookName = ({onCangeName}) =>{
    return (
        <Formik
        initialValues={{
            name: '',
            number: ''
          
        }}
        validationSchema={userSchema}
        onSubmit={(value, action) => {
            onCangeName(value)
            action.resetForm()
        }}
      >
        {({ errors, touched }) => (
        <Form>

          <ConteinerLabel>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Enter a name" />
            {errors.name && touched.name ? (
               <div>{errors.name}</div>
            ) : null}
          </ConteinerLabel> 

          <ConteinerLabel>
            <label htmlFor="number">Number</label>
            <Field type="tel" name="number" />
            {errors.number && touched.number ? (
              <div>{errors.number}</div>
            ) : null}
          </ConteinerLabel>

          <FormButton type="submit">Submit</FormButton>
        </Form>
        )}
      </Formik>
    )
}