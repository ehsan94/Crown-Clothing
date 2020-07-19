import React from "react";
import "./App.css";
import HomePage from "./Pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component";
import SignInAndSignUpPage from "./Pages/sign-in-sign-out/sign-in-sign-out.component";
import { auth } from './Components/firebase/firebase.utils';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
