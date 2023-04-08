import styled from 'styled-components'

export const SucessContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 3.5rem;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  margin-top: 3.5rem;

  @media ${(props) => props.theme.device.laptop} {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const OrderConfirmed = styled.div`
  h1 {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  img {
    width: 100%;
  }
`

export const OrderConfirmedInfo = styled.div`
  margin-top: 2rem;
  border: 1px solid ${(props) => props.theme.colors['yellow-dark']};
  border-radius: 0 1rem 0 1rem;
  padding: 2rem;

  div {
    display: flex;

    svg {
      color: ${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors.purple};
      font-size: 2rem;
      border-radius: 50%;
      padding: 0.3rem;
    }
  }
`
