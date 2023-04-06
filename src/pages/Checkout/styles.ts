import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;

  @media ${(props) => props.theme.device.laptop} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`
