import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Authentication/Authentication";
import Catogery from "./Pages/Catogery/Catogery";
import CatogeryProduct from "./Pages/CatogeryProduct/CatogeryProduct";
import Cart from "./Pages/Cart/Cart";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { firebaseAuthListener } from './Redux/auth/authAction';

function App({firebaseAuthListener}) {
  useEffect(()=>{
    //CDM (bcs dependencies array is empty!)

    //1-> check if user already exist or not and set state according to it
    firebaseAuthListener()
  },[firebaseAuthListener])
  
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/authentication" component={Authentication} />
      <Route path="/catogeries" component={Catogery} />
      <Route path="/catogery-product" component={CatogeryProduct} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}

var actions = {
  firebaseAuthListener
}

export default connect(null,actions)(App);
