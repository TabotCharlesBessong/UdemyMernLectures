
import  CartAcionsType from './CartActionType'
import { addItemToCart, removeItemFromCart } from './CartUtils'
const initialState = {
  hidden:true,
  cartItems:[]
}

const cartReducer = (state = initialState , action )=>{
  switch (action.type){
    case CartAcionsType.TOGGLE_CART:
      return {
        ...state,
        hidden:!state.hidden
      }
    case CartAcionsType.ADD_ITEM:
      return {
        ...state,
        cartItems:addItemToCart(state.cartItems,action.payload)
      }
      // break
    case CartAcionsType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter( cartItem => cartItem.id !== action.payload.id  )
      }
    case CartAcionsType.REMOVE_ITEM:
      return {
        ...state , 
        cartItems:  removeItemFromCart(state.cartItems,action.payload)
      }
    default:
      return state;
  }
}

export default cartReducer