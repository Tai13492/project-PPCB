import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import SignUp from "./Signup/SignUp";
import LoginForm from "./Login/LoginForm";
import Aboutus from "./Aboutus/Aboutus";
import Contactus from "./Contactus/Contactus";
import finishedSignup from "./Signup/finishedSignup";
import productList from "./Product/productList";
import React from "react";
import NavigationBar from "./components/NavigationBar";
import Details from "./Details/Details";
import MyCart from "./my_cart";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path="/productList/:id" component={Details} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/Aboutus" component={Aboutus} />
            <Route exact path="/Contactus" component={Contactus} />
            <Route exact path="/finishedSignup" component={finishedSignup} />
            <Route exact path="/productList" component={productList} />
            <Route exact path="/my-cart" component={MyCart} />
            {/* <Route exact path="/details" component={Details} /> */}
            {/* <Route exact path="/products" component={Products} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
