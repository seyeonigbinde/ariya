import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import formSchema from '../utils/formSchema'
import axios from 'axios'

const initialFormValues = {
  fullName: '',
  phone: '',
  email: '',
  password: '',
}

const initialFormErrors = {
  fullName: '',
  phone: '',
  email: '',
  password: '',
}

const Signup = () => {
  const { push } = useHistory();

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const handleChange = e => {
    yup.reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setFormErrors({ ...formErrors, [e.target.name]: '' })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [e.target.name]: err.errors[0] })
      })

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })

  }

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      fullName: formValues.fullName.trim(),
      phone: formValues.phone.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }

    axios.post('', newUser)
      .then(res => {
        console.log(res)
        push('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <section>
      <section className="form_section">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input className="form-control" onChange={handleChange} value={formValues.fullName} name="fullName" id="fullName" placeholder="Full Name" />
          </div>
          <p className='errors'>{formErrors.fullName}</p>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input className="form-control" onChange={handleChange} value={formValues.phone} name="phone" id="phone" placeholder="Phone Number" />
          </div>
          <p className='errors'>{formErrors.phone}</p>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input className="form-control" onChange={handleChange} value={formValues.email} name="email" id="email" placeholder="Email Address" />
          </div>
          <p className='errors'>{formErrors.email}</p>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input className="form-control" onChange={handleChange} value={formValues.password} name="password" id="password" type="password" placeholder="Password" />
            <p className='errors'>{formErrors.password}</p>
          </div>
          <div>
            <input type="checkbox" value="" aria-label="..." />
           I agree to ARIYA's terms of service and consent to ARIYA's privacy policy.
           </div>
          <br />
          <button disabled={disabled}>Signup</button>
        </form>
      </section>
    </section>
  );
}

export default Signup
