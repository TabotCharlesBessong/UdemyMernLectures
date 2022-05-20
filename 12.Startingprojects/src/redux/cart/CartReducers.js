
import  CartAcionsType from './CartActionType'
const initialState = {
  hidden:true
}

const cartReducer = (state = initialState , action )=>{
  switch (action.type){
    case CartAcionsType.TOGGLE_CART:
      return {
        ...state,
        hidden:!state.hidden
      }
      // break
    default:
      return state;
  }
}

export default cartReducer