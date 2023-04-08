import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  margin-top: 1rem;
  width: 100%;

  @media ${(props) => props.theme.device.laptopL} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`
