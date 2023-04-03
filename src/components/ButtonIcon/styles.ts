import styled from 'styled-components'

export const ButtonIconStyled = styled.button`
  position: relative;
  border: none;
  min-height: 2.2rem;
  min-width: 2.2rem;
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 0.4rem;
  transition: 0.5s;
  cursor: pointer;

  svg {
    width: 1.1rem;
    height: 1.1rem;
    font-size: 5px;
    fill: ${(props) => props.theme.white};
  }

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
