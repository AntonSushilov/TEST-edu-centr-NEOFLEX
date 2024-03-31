import { combineReducers } from 'redux';
import { productInCartReducer } from './Cart/reducer';
import { productInfoReducer } from 'services/ProductInfo/reducer';

export const rootReducer = combineReducers({
  productInfoReducer,
  productInCartReducer
});