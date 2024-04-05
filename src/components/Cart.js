import {useState} from 'react';

// define cart component
function Cart() 
{
    // declare a state variable and a function to update it
    const [cartItems, setCartItems] = useState([]);

    // function to add a product to cart
    function addToCart(product) 
    {
        // update the cart items state by adding the product to the previous items array array
        setCartItems(prevItems => [...prevItems, product]);
    }

    // render the cart component, displaying a list of items in the cart
    return (
        <div className="cart">
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
