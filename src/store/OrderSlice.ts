import { createSlice } from "@reduxjs/toolkit";


type initialStateType = {
    orderOpen: boolean
}

const initialState: initialStateType = {
    orderOpen: false
}

const orderOpenSlice = createSlice({
    name: 'activeFilter',
    initialState,
    reducers: {
        setOrderOpen: (state, action) => {
            state.orderOpen = action.payload
        }
    }
})

const {reducer, actions} = orderOpenSlice
export default reducer
export const {setOrderOpen} = actions