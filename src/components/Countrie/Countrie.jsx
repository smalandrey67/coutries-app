import { Article } from '../../styleComponents/Basic/Article.styled'
import { ImageWrapper, Image, Information, Title, List, Item, ItemBold } from '../../styleComponents/Basic/Countrie.styled'

export const Countrie = ({ countrie }) => {
  const { name, flag, information } = countrie

  return (
    <Article>
      <ImageWrapper>
        <Image src={flag} />
      </ImageWrapper>
      <Information>
        <Title>{name}</Title>
        <List>
          {information.map(item => (
            <Item key={item.title}>
              <ItemBold>{item.title}</ItemBold>
              {item.description}
            </Item>
          ))}
        </List>
      </Information>
    </Article>
  )
}
