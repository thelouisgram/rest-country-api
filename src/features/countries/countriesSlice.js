import { createSlice } from '@reduxjs/toolkit'
import { showAllCountries, searchByCode } from './countriesAction';

const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        loading: false,
        countriesData : [],
        countrySearched: [],
        error: false,
        success: false,
        message: '',
    },
    reducers:{
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.success = false;
            state.message = "";
            state.countrySearched = []
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(showAllCountries.pending, (state) => {
            state.loading = true;
        })
        .addCase(showAllCountries.fulfilled, (state, action) => {
            state.loading = false;
            state.countriesData = action.payload;
            state.success = true;
        })
        .addCase(showAllCountries.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload;
            state.countriesData = []
        })
        .addCase(searchByCode.pending, (state) => {
            state.loading = true;
        })  
        .addCase(searchByCode.fulfilled, (state, action) => {
            state.success = true;
            state.loading = false;
            state.countrySearched = action.payload;
        })  
        .addCase(searchByCode.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload;
            state.countrySearched = []
        })
    }
})

export default countriesSlice.reducer
export const {reset} = countriesSlice.actions