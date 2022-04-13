import { useState } from 'react'

import { Controls } from '../../components/Controls/Controls'
import { Countries } from '../../components/Countries/Countries'

import { Main } from '../../styleComponents/Basic/Main.styled'

export const MainPage = () => {
    const [term, setTerm] = useState('')
    const [selectedOption, setSelectedOption] = useState(null)

    return (
        <Main >
            <Controls
                setSelectedOption={setSelectedOption}
                selectedOption={selectedOption}
                setTerm={setTerm}
            />
            <Countries
                term={term}
                selectedOption={selectedOption}
            />
        </Main>
    )
}
