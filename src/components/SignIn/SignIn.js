import React, { useState } from 'react';
import './SignIn.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';


import { googleSignInStart, emailSignInStart } from '../../Redux/user/userAction'

import { connect } from 'react-redux';

// $accent-color: linear-gradient(90deg,#ed145b 0,#7b31f4);
const MyComponent = styled(TextField)({
  width: '100%',
  marginBottom: '25px',
  '& > .MuiFilledInput-root': {
    borderRadius: '0px',
    '&:hover:before': {
      borderBottom: '2px solid #e00bcb !important',
    } 
  }
           
})

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' })
  
  const handelChange = event => {
    const { value, type } = event.target
    setCredentials({ ...userCredentials, [type] : value })
  }

  const handelSubmit = async event => {
    event.preventDefault();
    const { email, password } = userCredentials
    emailSignInStart(email, password);
  }

  return (
    <div className='sign-in active'>
      <h1 className='sign-in-title'>Sign in</h1>
      <form 
        className="signin-form" 
        noValidate 
        autoComplete='off'
        onSubmit={handelSubmit}
      >
        <div className='signin-form-email-area'>
          <MyComponent 
              type='email'   
              id="filled-basic1" 
              label="Email" 
              variant="filled"
              required
              onChange={handelChange}
            />
        </div>
        <div className='signin-form-password-area'> 
          <MyComponent 
            type='password'    
            id="filled-basic2" 
            label="password" 
            variant="filled"
            required
            onChange={handelChange}
          />
        </div>
        <div className='note'>{`register >>`}</div>
        <div className='signin-form-buttons'>
        <Button
          sx={{
            marginTop: '30px',
            borderRadius: '0px',
            backgroundColor: 'rgba(224, 11, 203, 1)',
            '&:hover': {
              backgroundColor: 'black',
            }
          }}
          variant="contained" 
          size="large"
          type='submit'
          onClick={handelSubmit}
        >
          Sign In
        </Button>
        <Button
          sx={{
            marginTop: '30px',
            borderRadius: '0px',
            backgroundColor: '#4285F4',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
              boxShadow: 'inset 0px 0px 0px 2px black',
              boxSizing: 'border-box'
            }
          }}
          variant="contained" 
          size="large"
          onClick={googleSignInStart}
        >
          sign in with google
        </Button>        
        </div>     
      </form>
    </div>
  )
  
  
}

const mapDispatchtoProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchtoProps)(SignIn);


