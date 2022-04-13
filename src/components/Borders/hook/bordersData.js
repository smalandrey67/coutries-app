import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bordersCountryAsync } from '../../../store/requests/bordersCountryAsync'


export const useBordersData = () => {
    const dispatch = useDispatch()
    const country = useSelector(state => state.detailsCountry.country)

    useEffect(() => {
        dispatch(bordersCountryAsync(country.borders))
    }, [dispatch, country.borders])

    const { borders, status } = useSelector(state => state.bordersCountry)

    return {
        borders,
        status,
    }
}