import React from 'react';

// define checkout component
function Checkout({cartItems})
{
    // calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="checkout">
            <h3>Checkout</h3>
            {cartItems.map(item => (
                <div key={item.id} className="checkout-item">
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                </div>
            ))}
             {/* display total price */}
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
    );
}

export default Checkout;
