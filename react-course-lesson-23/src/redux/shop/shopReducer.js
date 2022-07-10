import shopActionsTypes from './shopTypes';

const INITIAL_STATE = {
  collections: null ,
  isFetching: false,
  errorMsg :undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionsTypes.FETCH_COLLECTIONS_START:
      return {
      ...state,
      isFetching: true,
      }
    case shopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.collections,
      }
    case shopActionsTypes.FETCH_COLLECTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload ,
        // collections:[]
      }
    default:
      return state;
  }
};

export default shopReducer;
