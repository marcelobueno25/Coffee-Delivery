import styled from 'styled-components'

export const CheckoutFormStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  input {
    border: 2px solid ${(props) => props.theme['base-button']};
    padding: 10px 15px;
    margin: 8px 5px;
    border-radius: 0.3em;
    background: ${(props) => props.theme['base-input']};
    width: 100%;
  }
`
