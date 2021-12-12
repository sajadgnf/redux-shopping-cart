import './App.css'
import { Switch, Route, Redirect } from "react-router-dom"

//components 
import Navbar from "./components/Navbar"
import Store from './components/Store'
import ProductDetails from "./components/ProductDetails"
import Cart from "./components/Cart"

// Context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider"

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route path='/cart' component={Cart} />
            <Route path='/products/:id' component={ProductDetails} />
            <Route path='/products' component={Store} />
            <Redirect to='/products' />
          </Switch>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
