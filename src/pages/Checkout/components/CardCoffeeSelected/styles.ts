import styled from 'styled-components'

export const CheckoutHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: left;

  svg {
    height: 25px;
    width: 25px;
    color: ${(props) => props.theme.colors['yellow-dark']};
    margin-right: 0.5em;
  }
`
