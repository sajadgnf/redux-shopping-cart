import { Routes, Route, Navigate } from "react-router-dom"
import { Provider } from "react-redux"

//components 
import Navbar from "./components/shared/Navbar"
import Store from './components/Store'
import ProductDetails from "./components/ProductDetails"
import ShopCart from "./components/ShopCart"

// redux
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/shopCart' element={<ShopCart />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/products' element={<Store />} />
        <Route path='/*' element={<Navigate to='/products' />} />
      </Routes>
    </Provider>
  );
}

export default App;
