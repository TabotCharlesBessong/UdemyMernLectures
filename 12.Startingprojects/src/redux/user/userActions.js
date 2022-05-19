
import { userActionsTypes } from "./userActionsTypes"

export const setCurrentUser = (user)=>({
  type:userActionsTypes.SET_CURRENT_USER,
  payload:user
})