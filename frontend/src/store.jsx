import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
} from './reducer/productReducers';
import { cartReducer } from './reducer/cartReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
} from './reducer/orderRuducer';
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userDetailsReducer,
  userUpdateReducer,
} from './reducer/userReducer';
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
});

//const middleware = [thunk];

const cartItemFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  reducer,
  initialState,
  devTools: import.meta.env.MODE !== 'production',
});

export default store;
