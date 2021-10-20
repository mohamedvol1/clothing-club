import React, { Component } from 'react';
import './SignUp.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';



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
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handelChange = event => {
    const { name, value } = event.target
    this.setState({ [name] : value }, () => console.log(this.state))
  }

  handelSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
    
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

      // document.getElementById('filled-basic3').value = '';
      // document.getElementById('filled-basic4').value = '';
      // document.getElementById('filled-basic5').value = '';
      // document.getElementById('filled-basic6').value = '';

    } catch(error) {
      console.error(error);
    }
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
              name='displayName'   
              id="filled-basic3" 
              label="Name" 
              variant="filled"
              onChange={this.handelChange}
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
                onChange={this.handelChange}
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
              onChange={this.handelChange}
            />
            <MyComponent 
              type='password'
              name='confirmPassword'    
              id="filled-basic6" 
              label="confirm password" 
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
            sign up
          </Button>    
          </div>      
        </form>
               
      </div>
    )
  }
  
}

export default SignIn;


