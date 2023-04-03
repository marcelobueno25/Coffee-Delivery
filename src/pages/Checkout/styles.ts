import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  row-gap: 30px;
  column-gap: 20px;
  width: 100%;

  div {
    width: 100%;
  }
`

export const CheckoutHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: left;

  svg {
    height: 25px;
    width: 25px;
    color: ${(props) => props.theme['yellow-dark']};
    margin-right: 0.5em;
  }
`
