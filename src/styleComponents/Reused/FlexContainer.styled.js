import styled from "styled-components"

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;

    flex-wrap: ${({ wrap }) => wrap || ''};

    justify-content: ${({ justify }) => justify || ''};

    height: ${({ height }) => height || ''};
`