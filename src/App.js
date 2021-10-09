import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage/Homepage.js';
import ShopPage from './pages/ShopPage/ShopPage.js';



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
      <Switch>
        <Route exact path='/hats' component={HatPage}/>
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  
  );
}

export default App;
