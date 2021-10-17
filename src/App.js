import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage/Homepage.js';
import ShopPage from './pages/ShopPage/ShopPage.js';
import LogInPage from './pages/LogInPage/LogInPage'
import NavBar from './components/NavBar/NavBar';
import { auth } from './firebase/firebase.utils';



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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log('componentWillUnmount');
  }

  render () {
    return (
      <div >
        <NavBar currentUser={this.state.currentUser}/>
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

export default App;
