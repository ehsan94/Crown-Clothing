import React from "react";
import "./App.css";
import HomePage from "./Pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'

import ShopPage from "./Pages/shop/shop.component";
import ChCheckoutPagee from "./Pages/checkout/check-out.component"

import Header from "./Components/header/header.component";
import SignInAndSignUpPage from "./Pages/sign-in-sign-out/sign-in-sign-out.component";
import { setCurrentUser } from "./redux/user/user.actions";
import {
  auth,
  createUserProfileDocument,
} from "./Components/firebase/firebase.utils";

import {selectCurrentUser} from './redux/user/user.selectors'
import CheckoutPage from "./Pages/checkout/check-out.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
