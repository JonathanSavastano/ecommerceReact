import React from React;

// define product card component
function productCard({ product }) 
{
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default productCard;