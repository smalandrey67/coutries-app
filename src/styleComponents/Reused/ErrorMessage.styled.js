import styled from "styled-components"

export const ErrorMessage = styled.h3`
    color: var(--color-text);
    padding-top: ${({ padding }) => padding || ''};
    text-align: center;
`