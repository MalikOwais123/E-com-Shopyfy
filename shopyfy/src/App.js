import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Authentication/Authentication";
import Catogery from "./Pages/Catogery/Catogery";
import CatogeryProduct from "./Pages/CatogeryProduct/CatogeryProduct";
import Cart from "./Pages/Cart/Cart";
import { useEffect } from "react";
import { connect } from "react-redux";
import { firebaseAuthListener } from "./Redux/auth/authAction";
import Test from "./Components/Test/Test";
import Navbar from "./Pages/Navbar/Navbar";

function App({ firebaseAuthListener }) {
  useEffect(() => {
    //CDM (bcs dependencies array is empty!)

    //1-> check if user already exist or not and set state according to it
    firebaseAuthListener();
  }, [firebaseAuthListener]);

  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/authentication" component={Authentication} />
        <Route path="/catogeries" component={Catogery} />
        <Route path="/catogery-product/:category" component={CatogeryProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  );
}

var actions = {
  firebaseAuthListener,
};

export default connect(null, actions)(App);
