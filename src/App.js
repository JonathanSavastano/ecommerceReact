// import necessary libraries
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

  function clearCart() 
  {
    setCartItems([]); 
  }

  return (
    <Router>
      <div className="App">
      <h1>Welcome to my e-commerce website</h1>
      
      <nav>
        <Link to="/Cart">Go to Cart</Link>
      </nav>

      <Routes>
        <Route path='/cart' element={<Cart cartItems={cartItems} 
          clearCart={clearCart}/>} />
        <Route path="/" element={<Product addToCart={addToCart} />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
