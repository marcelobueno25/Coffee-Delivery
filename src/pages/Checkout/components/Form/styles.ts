import styled from 'styled-components'

export const CheckoutFormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;

  input {
    border: 2px solid ${(props) => props.theme.colors['base-button']};
    padding: 10px 15px;
    margin: 8px 5px;
    border-radius: 0.3em;
    background: ${(props) => props.theme.colors['base-input']};
    width: 100%;
  }
`
