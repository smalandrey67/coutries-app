import { Container } from '../../styleComponents/Reused/Container.styled'
import { ErrorMessage } from '../../styleComponents/Reused/ErrorMessage.styled'

export const Error = ({ title }) => {
    return (
        <Container>
            <ErrorMessage padding="50px">{title}</ErrorMessage> 
        </Container>
    ) 
}