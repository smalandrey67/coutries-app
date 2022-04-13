import { IoArrowBack } from 'react-icons/io5'

import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { Borders } from '../../components/Borders/Borders'
import { Spinner } from '../../components/Spinner/Spinner'
import { Information } from '../../components/Information/Information'

import { Section } from '../../styleComponents/Reused/Section.styled'
import { Container } from '../../styleComponents/Reused/Container.styled'
import { CountryWrapper } from '../../styleComponents/Basic/Details.styled'
import { ErrorMessage } from '../../styleComponents/Reused/ErrorMessage.styled'
import { ImageWrapper, Image, ItemBold } from '../../styleComponents/Basic/Country.styled'
import { CountryRight, CountryTitle, CountryInformation, CountryBorders, CountryBordersWrapper, CountryBack } from '../../styleComponents/Basic/Details.styled'

import { useDetailsData } from './hook/detailsData'


export const DetailsPage = () => {  
    const navigate = useNavigate()  
    const goBack = () => navigate(-1) 

    const { name } = useParams()
    const { country, status, error } = useDetailsData(name)

    if(error){
        return (
            <Container>
                <ErrorMessage padding="50px">{error}</ErrorMessage>
            </Container>
        )
    } 

    return (
        <Section>
            <Container>
                <CountryBack onClick={goBack}>
                    <IoArrowBack />
                    Back
                </CountryBack>
                <CountryWrapper>
                    {status === 'pending' ?
                        <Spinner />
                        :
                        <>
                            <ImageWrapper margin="0 30px 0 0" maxWidth="500px">
                                <Image src={country.flag} />
                            </ImageWrapper>
                            <CountryRight>
                                <CountryTitle>{country.name}</CountryTitle>
                                <CountryInformation>
                                    <Information country={country}/>
                                </CountryInformation>
                                <CountryBorders>
                                        <ItemBold>Border Countries: </ItemBold>
                                        <CountryBordersWrapper>
                                            <Borders />
                                        </CountryBordersWrapper>
                                    </CountryBorders>
                            </CountryRight>
                        </>
                    }
                </CountryWrapper>
            </Container>
        </Section>
    )
}