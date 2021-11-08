import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { appBarContainer } from './NavBarStyles';
 
import { ReactComponent as Logo } from '../../Logo/Logo.svg';
import { auth } from '../../firebase/firebase.utils';
import ShoppingCart  from '../ShoppingCart/ShoppingCart';

import { selectCurrentUser } from '../../Redux/user/userSelector'
import { createStructuredSelector } from 'reselect';

import { AppBarContainer, NavBarContainer, LogoContainer, OptionsDiv, OptionLink } from './NavBarStyles'

const NavBar = ({ currentUser, toggleCart}) => {
  console.log('hey there',currentUser)
  return (
    <Fragment>
      <AppBarContainer>
        Free shipping on your first order
      </AppBarContainer>
      <NavBarContainer>
          <LogoContainer  to='/'>
              <Logo className='logo' />      
          </LogoContainer>
          <OptionsDiv>
            <OptionLink to='/shop'>
              SHOP 
            </OptionLink>
            <OptionLink to='/shop'>
              CONTACT
            </OptionLink>
            {
              currentUser ?
              <OptionLink as='div' className='option' onClick={() => auth.signOut()}>
                LOG OUT
              </OptionLink> 
              :
              <OptionLink to='/LogIn'>
                LOG IN
              </OptionLink>
            }
            <ShoppingCart onClick={toggleCart}/>
          </OptionsDiv>
      </NavBarContainer>
    </Fragment>
  )
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser
})



export default connect(mapStatetoProps)(NavBar);