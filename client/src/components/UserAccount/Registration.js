import React from 'react'
import {useForm} from '../../hooks/useForm'

export const Registration = (props) => {

  let { 
    handleSubmit,
    handleChange,
    data,
    errors 
  } = useForm({
    validations: {
        firstName: {
            required: {
              value: true,
              message: 'This field is required',
            },
            pattern: {
                value: '^[A-Za-z]*$',
                message: "First name should start with alphabets"
            }
        },
        lastName: {
          pattern: {
              value: '^[A-Za-z]*$',
              message: "Last Name should start with alphabets"
          }
        },
        age: {
            custom: {
                isValid: (value) => parseInt(value, 10) > 17,
                message: 'You have to be at least 18 years old'
            }
        },
        emailId: {
          required: {
            value: true,
            message: 'This field is required',
          },
          pattern: {
              value: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
              message: "Enter valid email id"
          }
        },
        password: {
            required: {
                value: true,
                message: 'This field is required',
            },
            custom: {
                isValid: (value) => value.length > 6,
                message: 'The password needs to be at least six letters'
            }
        }
    },
    onSubmit: () => {
      console.log("Errors", errors);
    }
  })

  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={handleChange('firstName')}
                aria-describedby="firstName"
                placeholder="Enter first name" />
              <div className="valid-feedback">Phone # looks good</div>
              <div className="text-danger">{errors.firstName}</div>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                onChange={handleChange('lastName')}
                aria-describedby="lastName"
                placeholder="Enter last name" />
            </div>
            <div className="text-danger">{errors.lastName}</div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="text"
                className="form-control"
                id="age"
                name="age"
                onChange={handleChange('age')}
                aria-describedby="age"
                placeholder="Enter age" />
            </div>
            <div className="text-danger">{errors.age}</div>
            <div className="form-group">
              <label htmlFor="emailId">Email address</label>
              <input type="email"
                className="form-control"
                id="emailId"
                name="emailId"
                onChange={handleChange('emailId')}
                aria-describedby="emailId"
                placeholder="Enter email" />
            </div>
            <div className="text-danger">{errors.emailId}</div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={handleChange('password')}
                placeholder="Password" />
            </div>
            <div className="text-danger">{errors.password}</div>
            <div className="form-check">
              <input type="checkbox"
                className="form-check-input"
                id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit"  className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration
