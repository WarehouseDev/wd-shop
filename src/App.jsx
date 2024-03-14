import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import CartButton from "./components/CartButton";
import Cart from "./components/Cart";

function App() {
  const [ cartIsShown, setCartIsShown ] = useState(false);
  const [ productsInCart, setProductsInCart ] = useState([]);

  function showCart(){
    setCartIsShown( prevState => !prevState );
  }

  function handleAddToCart(product){
    const productIndex = productsInCart.findIndex( item => item.id === product.id );

    if( productIndex !== -1 ){
      setProductsInCart( prevState => {
        const updatedCart = [...prevState];
        updatedCart[productIndex].quantity += 1;
        return updatedCart;
      })
    } else {
      setProductsInCart( prevState => ([ {...product, quantity: 1} , ...prevState ]) );
    }

  }


  function deleteItem(id){
    setProductsInCart( productsInCart.filter( item => item.id !== id ) )
  }

  function clearCart(){
    setProductsInCart([]);
  }

  return (
    <>
      <Header />
      <CartButton onShowCart={showCart} productsInCart={productsInCart} />
      { cartIsShown ? <Cart onDelete={deleteItem} onShowCart={showCart} onClearCart={clearCart} productsInCart={productsInCart} /> : <Products onAddItemToCart={handleAddToCart} /> }
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
