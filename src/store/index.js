import { configureStore } from '@reduxjs/toolkit'

import allCountriesReducer from './slices/allCountriesSlice'
import detailsCountryReducer from './slices/detailsCountrySlice'
import bordersCountryReducer from './slices/bordersCountrySlice'

export default configureStore({
    reducer: {
        allCountries: allCountriesReducer,
        detailsCountry: detailsCountryReducer,
        bordersCountry: bordersCountryReducer,
    }
})