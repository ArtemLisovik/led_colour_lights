import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { cartThunk } from './CartThunk'
import { ProductType } from "types/types";

type Nullable<T> = T | null;

type initialStateType = {
    products: any[],
    totalPrice: any
    loading: boolean
}

const initialState: initialStateType = {
    products: [],
    totalPrice: 0,
    loading: false
}

const isSelectedColorExist = (value: Nullable<any>) => value?.selectedColor ? value.selectedColor[0] : null

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<any>) => {
         state.products = [...state.products, action.payload]
         let total = 0 
            state.products.forEach(product => {
                total += +product.newPrice * +product.count
            })
            state.totalPrice = total
        },
        increaseCountProduct: (state, action: PayloadAction<any>) => {
            state.products.forEach(product => {
                if (product.id === action.payload.id && product.selectedLength === action.payload.selectedLength && product?.selectedColor[0] === action.payload.selectedColor[0]) {
                    product.count += 1 
                }
            })
            let total = 0
            state.products.forEach(product => {
                total += +product.newPrice * +product.count
            })
            state.totalPrice = total
        },
        decreaseCountProduct: (state, action: PayloadAction<any>) => {
            state.products.forEach(product => {
                if (product.id === action.payload.id && product.selectedLength === action.payload.selectedLength && product.selectedColor ? product.selectedColor[0] === action.payload.selectedColor[0] : null) {
                    product.count -= 1 
                }
            })
            let total = 0 
            state.products.forEach(product => {
                total += +product.newPrice * +product.count
            })
            state.totalPrice = total
        },
        deleteProduct: (state: any, action) => {
            state.products = state.products.filter((product: any) => {
                console.log('prod', product.selectedLength)
                // console.log(product.id !== action.payload.id && product.selectedLength === action.payload.selectedLength)
                console.log(product.id !== action.payload.id)
                return (product.id !== action.payload.id || product.selectedLength !== action.payload.selectedLength || isSelectedColorExist(product) !== isSelectedColorExist(action.payload))
            })
   
        },
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
export const { addProduct, deleteProduct, increaseCountProduct, decreaseCountProduct } = actions

export default reducer;