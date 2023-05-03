import { createSlice } from '@reduxjs/toolkit'
import { showAllCountries, searchByCode, searchByRegion } from './countriesAction';

const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        loading: false,
        countriesData : [],
        countrySearched: [],
        region: "",
        error: false,
        success: false,
        message: '',
        searchTerm: ''
    },
    reducers:{
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.success = false;
            state.message = "";
            state.countrySearched = [];
            state.region = ""
        },
        setRegion: (state, action) => {
            state.region = action.payload
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
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
        .addCase(searchByRegion.pending, (state) => {
            state.loading = true;
        })  
        .addCase(searchByRegion.fulfilled, (state, action) => {
            state.success = true;
            state.loading = false;
            state.countriesData = action.payload;
        })  
        .addCase(searchByRegion.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.message = action.payload;
            state.countriesData = []
        })
    }
})

export default countriesSlice.reducer
export const {reset, setRegion, setSearchTerm} = countriesSlice.actions