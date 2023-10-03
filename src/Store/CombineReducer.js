import { combineReducers } from '@reduxjs/toolkit';
import Reducer from './Reducer';
import CartReducer from './CartReducer';


export default combineReducers({
   counter: Reducer,
   cart: CartReducer
  });
  