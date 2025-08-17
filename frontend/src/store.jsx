import { configureStore, combineReducers } from '@reduxjs/toolkit'

const reducer = combineReducers({
  // product: productReducer,
})

const isDev =
  typeof process !== 'undefined'
    ? process.env.NODE_ENV !== 'production'
    : import.meta.env.MODE !== 'production';
const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), 
  // thunk đã có sẵn, không cần thêm
  preloadedState: {}, // = initialState
  devTools: isDev
})

export default store
