import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Authentication/Authentication";
import Catogery from "./Pages/Catogery/Catogery";
import CatogeryProduct from "./Pages/CatogeryProduct/CatogeryProduct";
import Cart from "./Pages/Cart/Cart";

function App() {
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

export default App;
