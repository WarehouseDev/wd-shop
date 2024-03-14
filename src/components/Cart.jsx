import React from 'react';
import { toast } from 'react-toastify';

function Cart({productsInCart, onShowCart, onDelete, onClearCart}) {
  
  const total = productsInCart.reduce( ( acc,  product) => {
    return acc + product.price * product.quantity
  }, 0 );  


  function purchase(){
    toast.success('Thanks for your purchase!');
    onShowCart();
    onClearCart();
  }


  return (
    <section className='product-overlay'>
        <button onClick={onShowCart} className='close-btn'>Back to shop</button>
        {
            productsInCart.length > 0 
            ?
             <>
                <ul>
                    { productsInCart.map( product => (
                        <li key={product.id} className='cart-li'>
                            <img src={product.image} alt={product.name} />
                            <p>{product.name}</p>
                            <div>
                                <p>Price: ${product.price}</p>
                                <p>Quantity: {product.quantity}</p>
                                <p>Total: ${ (product.price * product.quantity).toFixed(2) }</p>
                                <button onClick={ () => onDelete(product.id) } >Delete</button>
                            </div>
                        </li>
                    )) }
                </ul>
                <p className='total'>Total: {total.toFixed(2)} <button onClick={purchase}>Buy now</button></p>
             </>
            : 
            <p className='empty-cart'>Nothing in the cart yet!</p>    

        }
    </section>
  )
}

export default Cart