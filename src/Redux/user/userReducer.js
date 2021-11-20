import { 
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_UP_ERROR
 } from './userActionTypes';

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }

    case SIGN_IN_ERROR:
    case SIGN_OUT_ERROR:
    case SIGN_UP_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default: 
      return state;
  }
}

export default userReducer;