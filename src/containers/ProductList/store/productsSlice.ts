import { createSlice } from "@reduxjs/toolkit";

import {getNews} from './productsThunk'

type initialStateType = {
    news: any[]
}

const initialState: initialStateType = {
    news: []
}

const productsSlice = createSlice({
    name: 'products/news',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getNews.pending, state => {state.news = []})
            .addCase(getNews.fulfilled, (state, action) => {state.news = [...action.payload]})
            .addCase(getNews.rejected, (state) => {state.news = []})
    }
})

const { reducer, actions } = productsSlice;
export const {} = actions

export default reducer;