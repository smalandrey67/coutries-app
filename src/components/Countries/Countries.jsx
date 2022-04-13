import { Country } from '../Country/Country'
import { Spinner } from '../Spinner/Spinner'

import { Section } from '../../styleComponents/Reused/Section.styled'
import { Container } from '../../styleComponents/Reused/Container.styled'
import { FlexContainer } from '../../styleComponents/Reused/FlexContainer.styled'
import { ErrorMessage } from '../../styleComponents/Reused/ErrorMessage.styled'

import { useCountries } from './hook/countries'
import { useSearch } from './hook/search'

export const Countries = ({ term, selectedOption }) => {
    const { countries, status, error } = useCountries()
    const { visibleItems } = useSearch(countries, term, selectedOption)

    if(error){
        return (
            <Container>
                <ErrorMessage padding="50px">{error}</ErrorMessage>
            </Container>
        )
    } 

    return (
        <Section spinner={true}>
            <Container>

                <FlexContainer height="50vh" justify="center" wrap="wrap">
                    {status === 'pending' ? 
                        <Spinner /> 
                        :
                        visibleItems.map(country => <Country key={country.name} country={country} />)
                    }
                    {(!visibleItems.length && status === 'fulfilled') ? <ErrorMessage>Nothing was found</ErrorMessage> : ''}
                </FlexContainer>

            </Container>
        </Section>
    )
}
