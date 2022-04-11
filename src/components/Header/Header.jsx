import { IoMoon, IoMoonOutline } from 'react-icons/io5'

import { HeaderTag, Logo, Mode } from '../../styleComponents/Basic/Header.styled'
import { FlexContainer } from '../../styleComponents/Reused/FlexContainer.styled'
import { Container } from '../../styleComponents/Reused/Container.styled'

import { useTheme } from './hooks/theme'

export const Header = () => {
    const { themeHandler, theme } = useTheme()

    return (
        <HeaderTag>
            <Container>
                <FlexContainer height="80px" justify="space-between">
                    <Logo>Where is the world?</Logo>
                    <FlexContainer onClick={themeHandler}>
                        {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}
                        <Mode>{theme === 'light' ? 'Light mode' : 'Dark mode'}</Mode>
                    </FlexContainer>
                </FlexContainer>
            </Container>  
        </HeaderTag>
    )
}
