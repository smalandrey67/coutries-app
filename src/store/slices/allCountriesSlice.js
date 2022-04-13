import { createSlice } from '@reduxjs/toolkit'
import { allCountriesAsync } from '../requests/allCountriesAsync'

const allCountriesSlice = createSlice({
    name: 'allCountries',
    initialState: {
        countries: [],
        foundCountries: [],
        status: null,
        error: null
    },

    extraReducers: {
        [allCountriesAsync.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [allCountriesAsync.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.countries = action.payload.map(country => {
                return {
                    name: country.name,
                    flag: country.flag,
                    information: [
                        {
                            title: 'Population',
                            description: country.population
                        },
                        {
                            title: 'Region',
                            description: country.region
                        },
                        {
                            title: 'Capital',
                            description: country.capital
                        }
                    ]
                }
            })
        },
        [allCountriesAsync.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})
export default allCountriesSlice.reducer

