import * as yup from 'yup'

const formSchema = yup.object().shape({

  fullName: yup.string()
    .trim()
    .required('First Name is required')
    .min(3, 'First Name must be at least 3 characters long'),
  email: yup.string()
    .trim()
    .required('Email Address is required')
    .email('Must be a valid email address'),
  phone: yup.string()
    .required('Phone Number is required')
    .max(11, 'Phone Number cannot be more than 11 characters'),
  password: yup.string()
    .trim()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
  
})

export default formSchema
