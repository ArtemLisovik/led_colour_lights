import { createSlice } from "@reduxjs/toolkit";

import {getSpecials} from './specialOffersThunk'

type initialStateType = {
    specials: any[]
}

const initialState: initialStateType = {
    specials: []
}

const specialsSlice = createSlice({
    name: 'products/specials',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getSpecials.pending, state => {state.specials = []})
            .addCase(getSpecials.fulfilled, (state, action) => {state.specials = [...action.payload]})
            .addCase(getSpecials.rejected, (state) => {state.specials = []})
    }
})

const { reducer, actions } = specialsSlice;
export const {} = actions

export default reducer;