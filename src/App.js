import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage/Homepage.js';
import ShopPage from './pages/ShopPage/ShopPage.js';
import LogInPage from './pages/LogInPage/LogInPage'
import NavBar from './components/NavBar/NavBar';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/user/userAction';


const HatPage = () => {
  return (
    <div>
      <h1>HAT PAGE</h1>
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
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log('componentWillUnmount');
  }

  render () {
    return (
      <div >
        <NavBar/>
        <Switch>
          <Route exact path='/hats' component={HatPage}/>
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/LogIn' component={LogInPage} />
          <Route exact path='/' component={Homepage} />
        </Switch>
      </div>
    
    );
  }
}

const mapDispatchtoProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchtoProps)(App);
