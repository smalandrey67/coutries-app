import styled from "styled-components"

export const Article = styled.article`
    flex: 0 1 23%;
    border-radius: var(--br-radius);
    background-color: var(--color-alternative);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hidden;
    margin: 10px;

    @media(max-width: 1050px){
        flex: 0 1 30%;
    }   

    @media(max-width: 768px){
        flex: 0 1 45%;
    }

    @media(max-width: 550px){
        flex: 0 1 100%;
    }

`