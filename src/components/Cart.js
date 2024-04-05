

// define cart component
function Cart({cartItems}) 
{
    // render the cart component, displaying a list of items in the cart
    return (
        <div className="cart">
            <h3>Cart</h3>
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <h4>{item.title}</h4>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Cart;
