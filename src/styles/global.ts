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
`