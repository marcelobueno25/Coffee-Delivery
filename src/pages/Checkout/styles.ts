import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  column-gap: 1.5rem;

  @media ${(props) => props.theme.device.laptopL} {
    grid-template-columns: 1.3fr 1fr;
  }

  @media ${(props) => props.theme.device.laptop} {
    grid-template-columns: 1fr;
  }
`
