import React, { useState } from 'react';
import './SignUp.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

import { connect } from 'react-redux';
import { signUpStart } from '../../Redux/user/userAction';


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



const SignIn = ({ signUpStart }) => {
   
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handelChange = event => {
    const { name, value } = event.target
    setCredentials({ ...userCredentials, [name] : value })
  }

  const handelSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      signUpStart(email, password, displayName);
    } catch(error) {
      console.error('Error in signing up',error);
    }
  }
    
  return (
    <div className='register'>
      <h1 className='register-title'>Register</h1>  
      <form 
        className="register-form" 
        noValidate 
        autoComplete='off'
        onSubmit={handelSubmit}
      >
        <div className='register-form-name-area'>
          <MyComponent 
            type='text'
            name='displayName'   
            id="filled-basic3" 
            label="Name" 
            variant="filled"
            onChange={handelChange}
          />
        </div>
        <div className='signin-form-email-area'>
          <MyComponent 
              type='email'
              name='email'    
              id="filled-basic4" 
              label="Email" 
              variant="filled"
              required
              onChange={handelChange}
            />
        </div>
        <div className='register-form-password-area'> 
          <MyComponent 
            type='password'
            name='password'        
            id="filled-basic5" 
            label="password" 
            variant="filled"
            required
            onChange={handelChange}
          />
          <MyComponent 
            type='password'
            name='confirmPassword'    
            id="filled-basic6" 
            label="confirm password" 
            variant="filled"
            required
            onChange={handelChange}
          />
        </div>
        <div className='register-form-button'>
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
          sign up
        </Button>    
        </div>      
      </form>
              
    </div>
  )
  
}

const mapDispatchtoProps = dispatch => ({
  signUpStart: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName }))
})

export default connect(null, mapDispatchtoProps)(SignIn);


