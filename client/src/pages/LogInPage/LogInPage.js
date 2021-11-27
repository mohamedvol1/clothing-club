import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './LogInPage.scss';
import image from './loginimage.jpg';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ReactComponent as Logo } from '../../Logo/Logo.svg'

const LogInPage = () => {
  return (
    <div className='login-page'>
      <div 
        className='login-page-container' 
        style={{ backgroundImage: `url(${image})`,
                 backgroundSize: 'cover',
                 backgroundPosition: '0% 57%'   
              }}
      >
        <div className='login-page-logo-container'>
          <Logo className='login-page-logo' />
        </div>
        <div className='login-forms'>
        <Splide >  
          <SplideSlide>
            <SignIn  />
          </SplideSlide>
          <SplideSlide>
            <SignUp  />
          </SplideSlide>
        </Splide>            
        </div>
      </div>
    </div>
  )
}

export default LogInPage;