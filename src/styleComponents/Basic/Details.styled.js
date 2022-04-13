import styled from "styled-components"

export const CountryBack = styled.button`
    height: 30px;
    padding: 0px 20px;
    background-color: var(--colors-alternative);
    box-shadow: var(--shadow);
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 0.70rem;
    color: var(--color-text);
    cursor: pointer;

    margin-bottom: 20px;
`

export const CountryWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media(max-width: 1050px){
        flex-direction: column;
        align-items: flex-start;
    }

`

export const CountryRight = styled.div`
    color: var(--color-text);
`

export const CountryTitle = styled.h2`
    font-size: 35px;
    font-weight: var(--fw-normal);
    margin-bottom: 20px;
`

export const CountryInformation = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 40px;

    @media(max-width: 768px){
        flex-direction: column;
    }
` 
export const CountrySubtitle = styled.span`
`

export const CountryBorders = styled.div`
    display: flex;
    align-items: center;

    @media(max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
    } 
`

export const CountryBordersTitle = styled.b``

export const CountryBordersWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
                              
`

export const Border = styled.button`
    font-size: var(--fs-sm);
    background-color: var(--color-alternative);
    box-shadow: var(--shadow);
    padding: 0 15px;
    color: var(--color-text);
    cursor: pointer;

    margin: 10px;
`


