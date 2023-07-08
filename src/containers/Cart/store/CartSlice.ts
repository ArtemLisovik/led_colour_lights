import { createSlice } from "@reduxjs/toolkit";

import {cartThunk} from './CartThunk'
import { ProductType } from "types/types";

type initialStateType = {
    products: [],
    loading: boolean
}

const initialState:initialStateType = {
    products: [],
    loading: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct:(state: any, action) => {
            state.products = [...state.products, action.payload]
          },
        deleteProduct: (state:any, action) => {
            state.products = state.products.filter((product:ProductType) => {
                return product.id !== action.payload
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(cartThunk.pending, state => {
                state.loading = true
            })
            .addCase(cartThunk.fulfilled, state => {
                state.loading = false
            })
            .addCase(cartThunk.rejected, state => {
                state.loading = false
            })
    }
})

const { reducer, actions } = cartSlice;
export const {addProduct, deleteProduct} = actions

export default reducer;