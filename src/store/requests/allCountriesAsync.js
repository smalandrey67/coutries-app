import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAllCoutries } from '../../config'

export const allCountriesAsync = createAsyncThunk( 
    'allCountries/allCountriesAsync',

    async (_, { rejectWithValue }) => {

        try{
            const response = await fetch(getAllCoutries('all'))

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