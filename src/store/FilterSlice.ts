import { createSlice } from "@reduxjs/toolkit";


type initialStateType = {
    filter: string
}

const initialState: initialStateType = {
    filter: ''
}

const filterSlice = createSlice({
    name: 'activeFilter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

const {reducer, actions} = filterSlice
export default reducer
export const {setFilter} = actions