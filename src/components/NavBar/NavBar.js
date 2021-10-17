import './NavBar.scss';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Logo/Logo.svg';
import { auth } from '../../firebase/firebase.utils';



const NavBar = ({ currentUser }) => {
  return (
    <>
      <div className='add-bar'>
        Free shipping on your first order
      </div>
      <div className='nav-bar'>
          <Link className='logo-link'  to='/'>
            <span className='logo-container'>
              <Logo className='logo' />
            </span>
          </Link>
          <div className='options'>
            <Link className='shop-link option' to='/shop'>
              SHOP 
            </Link>
            <Link className='contact-link option' to='/shop'>
              CONTACT
            </Link>
            {
              currentUser ?
              <div className='option' onClick={() => auth.signOut()}>
                LOG OUT
              </div> 
              :
              <Link className='login-link option' to='/LogIn'>
                LOG IN
              </Link>
            }
            
          </div>
      </div>
    </>
  )
}

export default NavBar;