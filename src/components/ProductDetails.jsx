import React from 'react';

function ProductDetails({product, onCloseModal, onAddToCart}) {
  return (
    <article className='product-overlay'>
        <h1>{product.name}</h1>
        <button className='close-modal' onClick={onCloseModal}>Back to shop</button>
        <div>
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>  
              <p>{product.description}</p>
              <div className='price-cart'>
                <p className='price'>Price: ${product.price}</p>
                <button onClick={() => onAddToCart(product)}>Add to cart</button>
              </div>
            </div>
        </div>
    </article>
  )
}

export default ProductDetails