import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import Homepage from './pages/Homepage/Homepage.js';
import ShopPage from './pages/ShopPage/ShopPage.js';
import LogInPage from './pages/LogInPage/LogInPage'
import NavBar from './components/NavBar/NavBar';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import CartSlider from './components/CartSlider/CartSlider';

import { checkUserSession } from './Redux/user/userAction';

import { connect } from 'react-redux';

import { selectCurrentUser } from './Redux/user/userSelector'
import { createStructuredSelector } from 'reselect';

const HatPage = ({ match }) => {
  console.log('hey mate' , match.url)
  return (
    <div>
      <div>
        <h1>HAT PAGE</h1>
      </div>
      
    </div>
  )
}

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {  
    checkUserSession()
  }, [checkUserSession]) 

  return (
    <div >
      <NavBar/>
      <CartSlider />
      <Switch>
        <Route  path='/hats' component={HatPage}/>
        <Route  path='/shop' component={ShopPage} />
        <Route exact path='/LogIn' 
          render={() => 
            currentUser ?
            (<Redirect to='/' />) 
            : 
            (<LogInPage />) 
          } 
        />
        <Route exact path='/checkout' component={CheckoutPage} />
        
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  
  );
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchtoProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStatetoProps, mapDispatchtoProps)(App);
