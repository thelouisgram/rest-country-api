import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const showAllCountries = createAsyncThunk("countriesShowAll", async(_, thunkAPI) => {
    try{
        const response = await axios.get(`https://restcountries.com/v3.1/all`)
        return response.data
    }
    catch(err){
        const message = (err.response && err.response.data) || err.message;

        return thunkAPI.rejectWithValue(message)
    }
})