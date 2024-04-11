// import necessary libraries
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Product from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function App() {

  // dropdown menu
  const [showDropdown, setShowDropdown] = useState(false);

  // toggle dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // close dropdown
  const closeDropdown = () => {
    setShowDropdown(false);
  };

  // dropdown
  const cartDropdown = (
    <div className='dropdown-content'>
      <Link to="/Cart" onClick={closeDropdown}>
        <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
      </Link>
      &nbsp;&nbsp; 
      <Link to="/" onClick={closeDropdown}>
        <FontAwesomeIcon icon={faHome} size="2x"/>
      </Link>
    </div>
  );

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
      <div className='navbar'>
        <div className='dropdown' onClick={toggleDropdown}>
          <span>Navigation &#9662;</span>
          {showDropdown && cartDropdown}
        </div>
        <h1>Welcome to my e-commerce website</h1>
      </div>

        <Routes>
          <Route path='/cart' element={<Cart cartItems={cartItems} 
            clearCart={clearCart}/>} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/" element={<Product addToCart={addToCart} />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
