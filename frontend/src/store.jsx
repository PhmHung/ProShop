import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  productListReducer,
  productDetailsReducer,
} from './reducer/productReducers';
import { cartReducer } from './reducer/cartReducers';
import { userLoginReducer, userRegisterReducer } from './reducer/userReducer';
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

//const middleware = [thunk];

const cartItemFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  cart: { cartItems: cartItemFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  reducer,
  initialState,
  devTools: import.meta.env.MODE !== 'production',
});

export default store;
