
import  CartAcionsType from './CartActionType'
import { addItemToCart } from './CartUtils'
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
    default:
      return state;
  }
}

export default cartReducer