import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { allCountriesAsync } from '../../../store/requests/allCountriesAsync'

export const useCountries = () => { 
    const dispatch = useDispatch()
    const { countries, status, error } = useSelector(state => state.allCountries)

    useEffect(() => {
        dispatch(allCountriesAsync())
    }, [dispatch])

    return { 
        countries, 
        status, 
        error,
    }
}