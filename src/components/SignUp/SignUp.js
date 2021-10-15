import React, { Component } from 'react';
import './SignUp.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';



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



class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      email: '',
      password: ''
    }
  }

  handelChange = event => {
    const { value, type } = event.target
    this.setState({ [type] : value }, () => console.log(this.state))
  }

  handelSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '', text: '' });
    // document.getElementById('filled-basic1').value = '';
    // document.getElementById('filled-basic2').value = '';
  }

  

  render() {
    

    return (
      <div className='register'>
        <h1 className='register-title'>Register</h1>  
        <form 
          className="register-form" 
          noValidate 
          autoComplete='off'
          onSubmit={this.handelSubmit}
        >
          <div className='register-form-name-area'>
            <MyComponent 
              type='text'   
              id="filled-basic3" 
              label="Name" 
              variant="filled"
              onChange={this.handelChange}
            />
          </div>
          <div className='signin-form-email-area'>
            <MyComponent 
                type='email'   
                id="filled-basic4" 
                label="Email" 
                variant="filled"
                required
                onChange={this.handelChange}
              />
          </div>
          <div className='register-form-password-area'> 
            <MyComponent 
              type='password'    
              id="filled-basic5" 
              label="password" 
              variant="filled"
              required
              onChange={this.handelChange}
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
            onClick={this.handelSubmit}
          >
            Sign In
          </Button>    
          </div>      
        </form>
               
      </div>
    )
  }
  
}

export default SignIn;


