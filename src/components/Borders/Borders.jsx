import { Border } from '../../styleComponents/Basic/Details.styled'
import { ErrorMessage } from '../../styleComponents/Reused/ErrorMessage.styled'
import { Spinner } from '../Spinner/Spinner'

import { useBordersData } from './hook/bordersData'

import { useNavigate } from 'react-router-dom'

export const Borders = () => {
    const { borders, status } = useBordersData()

    const navigate = useNavigate()
    const test = (country) => navigate(`/country/${country}`)

   
    if(!borders.length){
        return <ErrorMessage>There is no border</ErrorMessage>
    }

    return (
        status === 'pending' ?
        <Spinner /> 
        :
        borders.map(({ name }) => <Border onClick={() => test(name)} key={name}>{name}</Border>) 
    )
}