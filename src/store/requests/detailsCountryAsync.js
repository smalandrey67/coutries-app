import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCountryByName } from '../../config'

export const detailsCountryAsync = createAsyncThunk( 
    'detailsCountrie/detailsCountrieAsync',

    async (name, { rejectWithValue }) => {

        try{
            const response = await fetch(getCountryByName(name))

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