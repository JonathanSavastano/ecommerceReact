// import necessary libraries
import { useEffect, useState } from "react"

// define product component
function Product() 
{
    const [products, setProducts] = useState([]);

    // fetching product data from an API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
    }, []);

    return (
        <div className='product-page'>
            {products.map(product => (
                <div key={product.id} className="product">
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <button>Add to cart</button>
                </div>
            ))}
        </div>
    );
}

export default Product;