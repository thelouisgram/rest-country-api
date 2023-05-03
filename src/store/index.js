import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import dropDownReducer from './filterDropDownSlice'
import countriesReducer from '../features/countries/countriesSlice'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        dropDown: dropDownReducer,
        country: countriesReducer,
    }
})

export default store;