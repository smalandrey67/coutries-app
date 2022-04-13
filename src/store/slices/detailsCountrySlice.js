import { createSlice } from "@reduxjs/toolkit"
import { detailsCountryAsync } from '../requests/detailsCountryAsync'

const detailsCountrySlice = createSlice({
    name: 'detailsCountry',
    initialState: {
        country: [],
        status: null, 
        error: null,
    },

    extraReducers: {
        [detailsCountryAsync.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [detailsCountryAsync.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.country = action.payload[0]
        },
        [detailsCountryAsync.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
})



export default detailsCountrySlice.reducer

