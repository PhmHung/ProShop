import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { productListReducer } from './reducer/productReducers'

const reducer = combineReducers({
  productList: productListReducer
})

const store = configureStore({
  reducer,
  preloadedState: {}, 
  devTools: import.meta.env.MODE !== 'production',
})

export default store
