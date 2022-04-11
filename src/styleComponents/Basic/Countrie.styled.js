import styled from "styled-components"

export const ImageWrapper = styled.div`
   height: 150px;
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

export const List = styled.ul``

export const Item = styled.li`
    &:not(:last-child){
        margin-bottom: 5px;
    }
`

export const ItemBold = styled.b`
    margin-right: 5px;
`




