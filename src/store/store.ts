import { configureStore } from "@reduxjs/toolkit";
import filterSlice from './FilterSlice'
import orderOpenSlice from './OrderSlice'

import ProductsReducer from 'containers/ProductList/store/productsSlice'
import CartReducer from 'containers/Cart/store/CartSlice'


export const store = configureStore({
    reducer: {ProductsReducer, CartReducer, filterSlice, orderOpenSlice},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch