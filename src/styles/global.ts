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
        color: ${(props) => props.theme['base-title']};
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 3rem;
        line-height: 100%;
        margin: 20px 0;
    }
`
