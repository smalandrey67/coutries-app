import styled from "styled-components"

export const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    justify-content: ${({ justify }) => justify || ''};

    height: ${({ height }) => height || ''};
`