import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className='signup'>
      <div className='singup-container'>
        <h2 className='signup-title'>Signup</h2>
        <form onSubmit={handleFormSubmit} className='signup-form'>
          <div className='signup-form-items'>
            <label htmlFor="firstName">First Name: </label>
            <input
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className='signup-form-items'>
            <label htmlFor="lastName">Last Name: </label>
            <input
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className='signup-form-items'>
            <label htmlFor="email">Email: </label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className='signup-form-items'>
            <label htmlFor="pwd">Password: </label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className='signup-form-items'>
            <button type="submit">Submit</button>
          </div>
        </form>
        <p>Already have an account?</p>
        <Link to='/login' className='login-link'>← Go to Login</Link>
      </div>
    </div>
  );
}

export default Signup;
