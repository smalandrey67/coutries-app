import styled from "styled-components"

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    align-items: ${({align}) => align ? align : 'center'};
    height: ${({height}) => height ? height : 'auto'}
`