import { configureStore } from '@reduxjs/toolkit'

import allCountriesReducer from './slices/allCountriesSlice'

export default configureStore({
    reducer: {
        allCountries: allCountriesReducer
    }
})