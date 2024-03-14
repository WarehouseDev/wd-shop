import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Sort from './Sort';
import ProductDetails from './ProductDetails';

import products from '../assets/products';

function Products({onAddItemToCart}) {
  const [ items, setItems ] = useState(products); 
  const [ selectedProduct, setSelectedProduct ] = useState(null);

  function selectProduct(product){
    setSelectedProduct(product);
  }

  function closeModal(){
    setSelectedProduct(null);
  }

  function handleSort( method ){
    let sortedItems = [...items]

    switch (method) {
        case 'a-to-z':
            sortedItems.sort( (a, b) => a.name.localeCompare(b.name));
            break;
        case 'z-to-a':
            sortedItems.sort( (a, b) => b.name.localeCompare(a.name));
            break;
        case 'price-up':
            sortedItems.sort( (a, b) => a.price - b.price);
            break;
        case 'price-down':
            sortedItems.sort( (a, b) => b.price - a.price);
            break;
        default:
            break;
    }

    setItems(sortedItems);
  }

  function addProductToCart(product){
    onAddItemToCart(product);
    toast.success('Item added to the cart')
    closeModal();
  }

  return (
    <>
        {
            selectedProduct ? 
            (<ProductDetails product={selectedProduct} onCloseModal={closeModal} onAddToCart={addProductToCart} />) 
            : 
            (
                <main>
                <h2>Check out our offer!</h2>
                <Sort onSort={handleSort} />
                <ul className='main-ul'>
                    { items.map( product => (
                        <li className={product.onSale ? 'on-sale' : ''} key={product.id} onClick={() => selectProduct(product)}>
                            <img src={product.image} alt={product.name} />
                            <div>
                                <p>{product.name}</p>
                                <p className='price'>{product.price}</p>
                            </div>
                        </li>
                    )) }
                </ul>
                </main>
            )
        }  
    </>
  )
}

export default Products;