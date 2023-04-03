import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 5;
`

export const ShoppingContent = styled.div`
  display: flex;
  align-items: center;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  min-height: 2.2rem;
  background: ${(props) => props.theme['purple-light']};
  border-radius: 0.2rem;
  margin-right: 10px;

  svg {
    width: 1rem;
    height: 1rem;
    font-size: 5px;
    fill: ${(props) => props.theme['purple-dark']};
    margin-right: 5px;
  }
`
