import { configureStore } from "@reduxjs/toolkit";

import ProductsReducer from 'containers/ProductList/store/productsSlice'
import SpecialsReducer from 'containers/SpecialOfferList/store/specialOffersSlice'


// import trusteeReducer from 'containers/TrusteeList/store/TrusteeSlice'

export const store = configureStore({
    reducer: {ProductsReducer, SpecialsReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch