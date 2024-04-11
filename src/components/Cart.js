import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// define cart component
function Cart({ cartItems, clearCart }) 
{
    // create a new array to group items by id and count
    const groupedItems = cartItems.reduce((acc, item) => {
        const existingItem = acc.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.count += 1;
        } else {
            acc.push({...item, count: 1 });
        }
        return acc;
    }, []);

    // render the cart component, displaying a list of items in the cart
    return (
        <div className="cart">
            <h3>Cart</h3>
            {groupedItems.map(item => (
                <div key={item.id} className="cart-item">
                    <h4>{item.title}</h4>
                    {item.count > 1 && <p>Quantity: {item.count}</p>}
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
        </div>
    );
}

export default Cart;
