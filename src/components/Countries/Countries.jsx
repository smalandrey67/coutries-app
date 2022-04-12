import { Countrie } from '../Countrie/Countrie'
import { Spinner } from '../Spinner/Spinner'

import { Section } from '../../styleComponents/Reused/Section.styled'
import { Container } from '../../styleComponents/Reused/Container.styled'
import { FlexContainer } from '../../styleComponents/Reused/FlexContainer.styled'
import { NotFound } from '../../styleComponents/Basic/Countries.styled'

import { useCountries } from './hook/countries'
import { useSearch } from './hook/search'

export const Countries = ({ term, selectedOption }) => {
    const { countries, status } = useCountries()
    const { visibleItems } = useSearch(countries, term, selectedOption)

    return (
        <Section spinner={true}>
            <Container>

                <FlexContainer height="50vh" justify="center">
                    {status === 'pending' ? 
                        <Spinner /> 
                        :
                        visibleItems.map(countrie => <Countrie key={countrie.name} countrie={countrie} />)
                    }
                    {(!visibleItems.length && status === 'fulfilled') ? <NotFound>Nothing was found</NotFound> : ''}
                </FlexContainer>

            </Container>
        </Section>
    )
}
