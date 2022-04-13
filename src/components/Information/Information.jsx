import { List, Item, ItemBold } from '../../styleComponents/Basic/Country.styled'
import { CountrySubtitle } from '../../styleComponents/Basic/Details.styled'


export const Information = ({ country }) => {
    const { nativeName, population, subregion, capital, topLevelDomain, currencies, languages } = country

    return (
        <>
            <List margin="0 50px 0 0">
                <Item>
                    <ItemBold>Native name:</ItemBold>{nativeName}
                </Item>
                <Item>
                    <ItemBold>Population:</ItemBold>{population}
                </Item>
                <Item>
                    <ItemBold>Sub Region:</ItemBold>{subregion}
                </Item>
                <Item>
                    <ItemBold>Capital:</ItemBold>{capital}
                </Item>
            </List>
            <List>
                <Item>
                    <ItemBold>Top Level Domain:</ItemBold>{topLevelDomain}
                </Item>
                <Item>
                    <ItemBold>Currency:</ItemBold>{currencies?.map(item => <CountrySubtitle key={item.code}>{item.name}</CountrySubtitle>)}
                </Item>
                <Item>
                    <ItemBold>Languages:</ItemBold>{languages?.map(item => <CountrySubtitle key={item.name}>{item.name}</CountrySubtitle>)}
                </Item>
            </List>
        </>
    )
}
