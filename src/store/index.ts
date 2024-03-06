import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/cart'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    carrinho: carrinhoReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>