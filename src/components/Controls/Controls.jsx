import { Section } from '../../styleComponents/Reused/Section.styled'
import { Container } from '../../styleComponents/Reused/Container.styled'
import { FlexContainer } from '../../styleComponents/Reused/FlexContainer.styled'

import { Search } from '../Search/Search'
import { Select } from '../Select/Select'

export const Controls = () => {
    return (
        <Section>
            <Container>
                <FlexContainer justify="space-between">
                    <Search />
                    <Select />
                </FlexContainer>
            </Container>
        </Section> 
    )
}