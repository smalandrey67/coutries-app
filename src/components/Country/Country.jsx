import { useNavigate } from 'react-router-dom'

import { Article } from '../../styleComponents/Basic/Article.styled'
import { ImageWrapper, Image, Information, Title, List, Item, ItemBold } from '../../styleComponents/Basic/Country.styled'

export const Country = ({ country = [] }) => {
  const { name, flag, information } = country

  const navigate = useNavigate()

  const goToDetails = () => navigate(`/country/${name}`)

  return (
    <Article onClick={goToDetails}>
      <ImageWrapper height="150px">
        <Image src={flag} />
      </ImageWrapper>
      <Information>
        <Title>{name}</Title>
        <List>
          {information.map(item => (
            <Item key={item.title}>
              <ItemBold>{item.title}:</ItemBold>
              {item.description}
            </Item>
          ))}
        </List>
      </Information>
    </Article>
  )
}
