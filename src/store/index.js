import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import filterReducer from './filterSlice'
import countriesReducer from '../features/countries/countriesSlice'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        filter: filterReducer,
        country: countriesReducer,
    }
})

export default store;