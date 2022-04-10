import styled from "styled-components"

export const Label = styled.label`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 30px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    background-color: var(--color-alternative);
    color: var(--color-text);
`

export const Input = styled.input.attrs({
    type: 'search',
    name: 'search',
    placeholder: 'Search country',
})
`
    margin-left: 10px;
    color: var(--color-text);
    height: 100%;
    letter-spacing: 0.8px;
`