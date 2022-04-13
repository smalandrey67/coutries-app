import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { detailsCountryAsync } from '../../../store/requests/detailsCountryAsync'

export const useDetailsData = (name) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(detailsCountryAsync(name))
    }, [name, dispatch])

    const { country, status, error } = useSelector(state => state.detailsCountry)

    return { 
        country,
        status,
        error,
    }
}