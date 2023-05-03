import { createSlice } from "@reduxjs/toolkit";

const filterDropDownSlice = createSlice({
    name: "dropDown",
    initialState: {dropDown: false},
    reducers:{
        toggleDropDown: (state) => {
            state.dropDown = !state.dropDown
        }
    }
})
export const { toggleDropDown } = filterDropDownSlice.actions
export default filterDropDownSlice.reducer

