
import CartActionType from "./CartActionType";

export const toggleCart = ()=> ({
  type:CartActionType.TOGGLE_CART
})

export const addItem = (item) => ({
  type:CartActionType.ADD_ITEM,
  payload:item
})