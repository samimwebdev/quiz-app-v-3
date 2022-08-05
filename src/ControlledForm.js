import React, { useRef, useState } from 'react'
const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  profession: '',
  gender: 'male',
}

export default function ControlledForm() {
  const [userData, setUserData] = useState(initialData)

  const firstNameRef = useRef(null)

  const [submitted, setSubmitted] = useState(false)

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
  })

  const handleChange = (evt) => {
    setUserData({
      ...userData,
      [evt.target.name]: evt.target.value,
    })

    setErrors({
      ...errors,
      [evt.target.name]: '',
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const { firstName, lastName, email, profession } = userData
    console.log('firstNameRef.current.value', firstNameRef.current.value)
    firstNameRef.current.focus()

    const userErrors = {
      firstName: '',
      lastName: '',
      email: '',
      profession: '',
    }
    let isError = false

    if (firstName === '') {
      isError = true
      userErrors.firstName = 'FirstName is  Required'
    }

    if (lastName === '') {
      isError = true
      userErrors.lastName = 'LastName is  Required'
    }
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email === '' || !regexEmail.test(email)) {
      isError = true
      userErrors.email = 'Email is  Required and must be Valid'
    }

    if (profession === '') {
      isError = true
      userErrors.profession = 'Profession is Required'
    }

    setErrors(userErrors)

    if (isError) return
    //form is valid , now you can submit the form
    //submit form
    setSubmitted(true)
    //reset Data
    setUserData(initialData)
  }

  const { firstName, lastName, email, profession, gender } = userData

  return (
    <div style={{ width: 600, margin: '0 auto' }}>
      {submitted && <h3>Form SuccessFully Submitted</h3>}

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor='firstName'>FirstName: </label>
          <input
            type='text'
            required
            name='firstName'
            ref={firstNameRef}
            onChange={handleChange}
            value={firstName}
            id='firstName'
          />
        </div>
        <p style={{ color: 'red' }}>{errors.firstName}</p>
        <br />
        <div>
          <label htmlFor='lastName'>LastName: </label>
          <input
            type='text'
            name='lastName'
            onChange={handleChange}
            value={lastName}
            id='lastName'
          />
        </div>
        <p style={{ color: 'red' }}>{errors.lastName}</p>
        <br />
        <div>
          <label htmlFor='email'>Email: </label>

          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={email}
            id='email'
          />
        </div>
        <p style={{ color: 'red' }}>{errors.email}</p>
        <br />
        <div>
          <label htmlFor='gender'>Gender: </label>
          <input
            type='radio'
            name='gender'
            value='male'
            checked={gender === 'male'}
            onChange={handleChange}
          />{' '}
          Male
          <input
            type='radio'
            name='gender'
            checked={gender === 'female'}
            value='female'
            onChange={handleChange}
          />{' '}
          Female
        </div>
        <br />
        <div>
          <label htmlFor='profession'>Profession: </label>

          <select
            id='profession'
            name='profession'
            value={profession}
            onChange={handleChange}
          >
            <option value='' disabled>
              Select Option
            </option>
            <option value='developer'>Web Developer</option>
            <option value='softDeveloper'>Software Developer</option>
            <option value='designer'>Designer</option>
          </select>
        </div>
        <br />
        <p style={{ color: 'red' }}>{errors.profession}</p>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}
