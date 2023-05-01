import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {filter: false},
    reducers:{
        toggleFilter: (state) => {
            state.filter = !state.filter
        }
    }
})
export const { toggleFilter } = filterSlice.actions
export default filterSlice.reducer

