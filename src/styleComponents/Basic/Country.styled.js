import styled from "styled-components"

export const ImageWrapper = styled.div`
    height: ${({ height }) => height || ''};
    margin: ${({ margin }) => margin || ''};
    max-width: ${({ maxWidth }) => maxWidth || '' };


    @media(max-width: 1050px){
        margin: 0;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`

export const Information = styled.div`
    padding: 10px;
    color: var(--color-text);
`

export const Title = styled.h3`
    margin-bottom: 10px;
`

export const List = styled.ul`
    margin: ${({ margin}) => margin ? margin : ''};


    @media(max-width: 768px){
        &:not(:last-child){
            margin: 0 0 20px 0;
        }
    } 
`

export const Item = styled.li`
    &:not(:last-child){
        margin-bottom: 10px;
    }
`

export const ItemBold = styled.b`
    font-size: 17px;
    margin-right: 5px;
`




