// import necessary libraries
import {useState} from 'react';
import './App.css';
import Product from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, RouterProvider, Switch, Link } from 'react-router-dom';

function App() {

  const[cartItems, setCartItems] = useState([]);

  function addToCart(product)
  {
    setCartItems(prevItems => [...prevItems, product]);
  }

  return (
    <Router>
      <div className="App">
      <h1>Welcome to my e-commerce website</h1>
      <Link to="/cart">Go to Cart</Link>
      <Switch>
        <Route exact path="/">
          <Product addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart cartItems={cartItems} />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
