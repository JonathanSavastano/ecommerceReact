import React from 'react';

// define checkout component
function Checkout({cartItems})
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

    // calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="checkout">
            <h3>Checkout</h3>
            {groupedItems.map(item => (
                <div key={item.id} className="checkout-item">
                    <h4>{item.title}</h4>
                    {item.count > 1 && <p>Quantity: {item.count}</p>}
                    <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
                    <p>${item.price}</p>
                </div>
            ))}
             {/* display total price */}
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
    );
}

export default Checkout;
