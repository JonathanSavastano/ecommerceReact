// import necessary libraries
import { useEffect, useState } from "react"

// define product component
function Product({ addToCart }) 
{
    const [products, setProducts] = useState([]);

    // fetching product data from an API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data => {
            setProducts(data); 
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    }, []);

    // return a list of product's title and descriptions. Make add to cart button
    return (
        <div className='product-page'>
            {products.map(product => (
                <div key={product.id} className="product">
                    <h4>{product.title}</h4>
                    <img className="product-image" src={product.image} alt={product.description} />
                    <p>{product.description}</p>
                    <button onClick={() => addToCart(product)}>Add to cart</button>
                </div>
            ))}
        </div>
    );
}

export default Product;
