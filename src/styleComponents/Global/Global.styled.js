import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --family: 'Nunito Sans', sans-serif;

        --fs-sm: 14px;
        
        --fw-light: 300;
        --fw-mormal: 600;
        --fw-bold: 800;

        --br-radius: 10px;

    }

    body{
        font-family: var(--family);
        font-size: var(--fs-sm);
        background-color: var(--color-background);
    }
    
    body[data-theme='light']{
        --color-background: hsl(0, 0%, 98%);
        --color-text: hsl(200, 15%, 8%);
        --color-alternative: hsl(0, 0%, 100%);
        --shadow: rgba(-23,1,165,0.2) 0px 8px 24px;
    }

    body[data-theme='dark']{
        --color-background: hsl(207, 26%, 17%);
        --color-text: hsl(0, 0%, 100%);
        --color-alternative: hsl(209, 23%, 22%);
        --shadow: rgba(245, 245, 245, 0.2) 0 0 8px;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        background-color: none;
        outline: none;
    }

    input {
        border: none;
        background-color: transparent;
        outline: none;
    }

    ul {
        list-style: none;
    }
    
`

