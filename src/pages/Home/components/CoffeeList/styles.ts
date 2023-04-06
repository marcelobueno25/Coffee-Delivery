import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 4rem;
`
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 3.5rem;
  flex-wrap: wrap;
  justify-items: center;
  margin-top: 3.5rem;

  @media ${(props) => props.theme.device.laptopL} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`
