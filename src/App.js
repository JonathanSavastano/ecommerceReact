// import necessary libraries
import {useState} from 'react';
import './App.css';
import Product from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {

  const[cartItems, setCartItems] = useState([]);

  function addToCart(product)
  {
    setCartItems(prevItems => [...prevItems, product]);
  }

  return (
    <div className="App">
      <h1>Welcome to my e-commerce website</h1>
      <Cart cartItems={cartItems} />
      <Product addToCart={addToCart} />
      <Checkout cartItems={cartItems} />
    </div>
  );
}

export default App;
