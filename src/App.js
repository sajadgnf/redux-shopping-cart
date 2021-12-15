import { Routes, Route, Navigate } from "react-router-dom"

//components 
import Navbar from "./components/shared/Navbar"
import Store from './components/Store'
import ProductDetails from "./components/ProductDetails"
import ShopCart from "./components/ShopCart"

// Context
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvider"

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path='/shopCart' element={<ShopCart />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/products' element={<Store />} />
          <Route path='/*' element={<Navigate to='/products' />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
