import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required')
})

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  background-color: ${(props) => (props.primary ? 'lightgray' : 'white')};
  padding: 20px;
`

export const StyledLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`

export const StyledInput = styled.input`
  display: block;
  width: 70%;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
`

export const StyledTextarea = styled.textarea`
  display: block;
  width: 70%;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
`

export const ErrorLabel = styled.p`
  color: red;
`

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
    validationSchema: validationSchema
  })
  return (
    <FormContainer primary={true} onSubmit={formik.handleSubmit}>
      <div>
        <StyledLabel for="firstName">First Name</StyledLabel>
        <ErrorLabel>{formik.errors.firstName}</ErrorLabel>
        <StyledInput
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
      </div>
      <div>
        <StyledLabel for="lastName">Last Name</StyledLabel>
        <ErrorLabel>{formik.errors.lastName}</ErrorLabel>

        <StyledInput
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
      </div>
      <div>
        <StyledLabel for="email">Email</StyledLabel>
        <ErrorLabel>{formik.errors.email}</ErrorLabel>
        <StyledInput
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      <div>
        <StyledLabel for="message">Message</StyledLabel>
        <StyledTextarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
      </div>
      <button type="submit">Submit</button>
    </FormContainer>
  )
}

export default Form
