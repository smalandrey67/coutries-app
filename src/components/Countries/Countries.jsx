import { Countrie } from '../Countrie/Countrie'

import { Section } from '../../styleComponents/Reused/Section.styled'
import { Container } from '../../styleComponents/Reused/Container.styled'
import { FlexContainer } from '../../styleComponents/Reused/FlexContainer.styled'

import { useCountries } from './hook/countries'

import { Spinner } from '../Spinner/Spinner'

export const Countries = () => {
    const { countries, status } = useCountries()

    return (
        <Section spinner={true}>
            <Container>

                <FlexContainer height="50vh" justify="center">
                    {status === 'pending' ? 
                        <Spinner /> 
                        :
                        countries.map(countrie => <Countrie key={countrie.name} countrie={countrie} />)
                    }
                </FlexContainer>

            </Container>
        </Section>
    )
}
