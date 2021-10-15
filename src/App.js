import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage/Homepage.js';
import ShopPage from './pages/ShopPage/ShopPage.js';
import LogInPage from './pages/LogInPage/LogInPage'
import NavBar from './components/NavBar/NavBar'



const HatPage = () => {
  return (
    <div>
      <h1>HAT PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div >
      <NavBar />
      <Switch>
        <Route exact path='/hats' component={HatPage}/>
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/LogIn' component={LogInPage} />
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  
  );
}

export default App;
