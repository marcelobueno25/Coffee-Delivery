import styled from 'styled-components'

export const ButtonIconStyled = styled.button`
  border: none;
  min-height: 2.5rem;
  min-width: 2.5rem;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 0.2rem;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.yellow};
  }
`
