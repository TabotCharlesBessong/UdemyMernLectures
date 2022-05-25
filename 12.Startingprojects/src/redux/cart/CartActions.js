
import CartActionType from "./CartActionType";

export const toggleCart = ()=> ({
  type:CartActionType.TOGGLE_CART
})

export const addItem = (item) => ({
  type:CartActionType.ADD_ITEM,
  payload:item
})

export const clearItemFromCart = (item) => ({
  type: CartActionType.CLEAR_ITEM_FROM_CART,
  payload:item
})

export const removeItem = (item)=> ({
  type: CartActionType.REMOVE_ITEM,
  payload:item
})