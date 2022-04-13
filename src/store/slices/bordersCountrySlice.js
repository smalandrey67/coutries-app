import { createSlice } from "@reduxjs/toolkit"
import { bordersCountryAsync } from '../requests/bordersCountryAsync'

const bordersCountrySlice = createSlice({
    name: 'detailsCountrie',
    initialState: {
        borders: [],
        status: null, 
        error: null,
    },

    extraReducers: {
        [bordersCountryAsync.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [bordersCountryAsync.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.borders = action.payload
        },
        [bordersCountryAsync.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
})



export default bordersCountrySlice.reducer

