import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// define cart component
function Cart({ cartItems, clearCart }) 
{
    // render the cart component, displaying a list of items in the cart
    return (
        <div className="cart">
            <h3>Cart</h3>
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <h4>{item.title}</h4>
                    <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
                    <p>${item.price}</p>
                </div>
            ))}
            <button onClick={clearCart}>Clear Cart</button>
            <br />
            <br />

            {/* link to checkout */}
            <nav>
                <Link to="/Checkout">
                    Checkout
                </Link>
            </nav>
            <br />
            <br />

            {/* link back to app.js */}
            <nav>
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} size="2x" />
                </Link>
            </nav>
        </div>
    );
}

export default Cart;
