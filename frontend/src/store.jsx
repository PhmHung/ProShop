import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  productDetailsReducer,
  productListReducer,
} from './reducer/productReducers';
import { cartReducer } from './reducer/cartReducers';
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

// const middleware = [thunk];

const cartItemFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: { cartItems: cartItemFromStorage },
};

const store = configureStore({
  reducer,
  initialState,
  devTools: import.meta.env.MODE !== 'production',
});

export default store;
