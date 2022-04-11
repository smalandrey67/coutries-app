import { createSlice } from '@reduxjs/toolkit'
import { allCountriesAsync } from '../requests/allCountriesAsync'

const allCountriesSlice = createSlice({
    name: 'allCountries',
    initialState: {
        countries: [],
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
            state.countries = action.payload.map(countrie => {
                return {
                    name: countrie.name,
                    flag: countrie.flag,
                    information: [
                        {
                            title: 'Population:',
                            description: countrie.population
                        },
                        {
                            title: 'Region:',
                            description: countrie.region
                        },
                        {
                            title: 'Capital:',
                            description: countrie.capital
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

export const { getCountries } = allCountriesSlice.actions
export default allCountriesSlice.reducer

