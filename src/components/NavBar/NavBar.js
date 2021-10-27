import './NavBar.scss';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Logo/Logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import ShoppingCart  from '../ShoppingCart/ShoppingCart';
import { selectCurrentUser } from '../../Redux/user/userSelector'
import { createStructuredSelector } from 'reselect';


const NavBar = ({ currentUser, toggleCart}) => {
  console.log('hey there',currentUser)
  return (
    <Fragment>
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
            <ShoppingCart onClick={toggleCart}/>
          </div>
      </div>
    </Fragment>
  )
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser
})



export default connect(mapStatetoProps)(NavBar);