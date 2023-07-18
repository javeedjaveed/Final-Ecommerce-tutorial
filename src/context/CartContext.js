import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCardItem: () => {},
  deleteCardItem: () => {},
})

export default CartContext
