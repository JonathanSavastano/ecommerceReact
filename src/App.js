// import necessary libraries
import './App.css';
import React from 'react';
import Product from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my e-commerce website</h1>
      <Cart />
      <Product />
    </div>
  );
}

export default App;
