
import {userActionsTypes} from './userActionsTypes'

const initialState = {
  currentUser:null
}

const userReducer = (state = initialState ,action)=> {
  switch(action.type){
    case userActionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser:action.payload 
      }
      break
    default:
      return state
  }
}

export default userReducer