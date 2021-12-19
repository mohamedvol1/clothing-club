import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import Homepage from './pages/Homepage/Homepage.js';
import ShopPage from './pages/ShopPage/ShopPage.js';
import LogInPage from './pages/LogInPage/LogInPage'
import NavBar from './components/NavBar/NavBar';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import CartSlider from './components/CartSlider/CartSlider';

import { useDispatch, useSelector } from 'react-redux';

import { checkUserSession } from './Redux/user/userAction';
import { selectCurrentUser } from './Redux/user/userSelector'


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

const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch(checkUserSession())
  
  useEffect(() => {  
    dispatch(checkUserSession())
  }, [dispatch]) 

  return (
    <div >
      <NavBar/>
      <CartSlider />
      <Switch>
        
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

export default App;
