import styled from "styled-components"
import { Link } from 'react-router-dom'

export const HeaderTag = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--color-alternative);
`

export const Logo = styled(Link).attrs({
    to: '/'
})`
    font-size: var(--fw-sm);
    font-weight: var(--fw-bold);
    color: var(--color-text);
`

export const Mode = styled.span`
    margin-left: 5px;
    font-size: var(--fs-sm);
    color: var(--color-text);
    text-transform: capitalize;
    cursor: pointer;
`

