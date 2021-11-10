import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import Homepage from './pages/Homepage/Homepage.js';
import ShopPage from './pages/ShopPage/ShopPage.js';
import LogInPage from './pages/LogInPage/LogInPage'
import NavBar from './components/NavBar/NavBar';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import CartSlider from './components/CartSlider/CartSlider';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/user/userAction';
import { selectCurrentUser } from './Redux/user/userSelector'
// import { selectCollectionsArray } from './Redux/shop/shopSelector';
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    const { setCurrentUser } = this.props 
      if (userAuth) { 
        console.log('user object',userAuth)
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        });
      } else {
        
        setCurrentUser(userAuth);
        
      }
      // one time run code 
      // addCollectionsAndDocuments(
      //   'collections', collectionsArray.map(
      //     ({ title, items }) => ({ title, items })
      //   )
      // )
    
    })


  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log('componentWillUnmount');
  }

  render () {
    const { currentUser } = this.props
    console.log('hello from app,js', currentUser)
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
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsArray
})


const mapDispatchtoProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
