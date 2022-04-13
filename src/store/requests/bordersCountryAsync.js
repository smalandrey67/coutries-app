import { createAsyncThunk } from '@reduxjs/toolkit'
import { getBordersByCode } from '../../config'

export const bordersCountryAsync = createAsyncThunk( 
    'allCountries/bordersCountryAsync',

    async (borders, { rejectWithValue }) => {
        try{
            const response = await fetch(getBordersByCode(borders))

            if(!response.ok) {
                throw new Error('Something went wrong')
            }

            const data = await response.json()
    
            return data

        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)