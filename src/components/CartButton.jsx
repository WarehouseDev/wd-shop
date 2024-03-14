import React from 'react'

function CartButton({onShowCart, productsInCart}) {
  return (
    <button className={`cart-btn ${ productsInCart.length === 0 ? '' : 'not-empty' } `} onClick={onShowCart}>Show Cart <span>{productsInCart.length}</span> </button>
  )
}

export default CartButton