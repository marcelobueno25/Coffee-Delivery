import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
    }

    body {
        color: ${(props) => props.theme.colors['base-title']};
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1 {
        font-family: 'Baloo 2', cursive;
        color: ${(props) => props.theme.colors['base-title']};
        font-weight: 800;
        font-size: 3rem;
        line-height: 100%;
        margin: 20px 0;
    }
    
    h2 {
        font-family: 'Baloo 2', cursive;
        color: ${(props) => props.theme.colors['base-subtitle']};
        font-weight: 800;
        font-size: 2rem;
        line-height: 100%;
        margin: 20px 0;
    }

    h3 {
        font-family: 'Baloo 2', cursive;
        color: ${(props) => props.theme.colors['base-subtitle']};
        font-weight: 800;
        font-size: 1.2rem;
        line-height: 100%;
        margin: 10px 0;
        margin-bottom: 15px;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
`
