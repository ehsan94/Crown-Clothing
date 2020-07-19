import React from 'react';
import './App.css';
import HomePage from './Pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-sign-out/sign-in-sign-out.component'

function App() {
  return (
    <div >
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route  path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SignInAndSignUpPage}/>
    </Switch>
    </div>
  );
}

export default App;
