import React, { Fragment } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { appBarContainer } from './NavBarStyles';
 
import { ReactComponent as Logo } from '../../Logo/Logo.svg';
import ShoppingCart  from '../ShoppingCart/ShoppingCart';

import { selectCurrentUser } from '../../Redux/user/userSelector'
import { createStructuredSelector } from 'reselect';

import { AddBarContainer, NavBarContainer, LogoContainer, OptionsDiv, OptionLink } from './NavBarStyles'
import { signOutStart } from '../../Redux/user/userAction';

const NavBar = ({ currentUser, toggleCart, signOutStart}) => {
  console.log('hey there',currentUser)
  return (
    <Fragment>
      <AddBarContainer>
        Free shipping on your first order
      </AddBarContainer>
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
              <OptionLink as='div' className='option' onClick={signOutStart}>
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

const mapDispatchtoProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})



export default connect(mapStatetoProps, mapDispatchtoProps)(NavBar);