import styled from 'styled-components'

export const ButtonStyled = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};
  transition: all 0.5s;
  border: none;
  padding: 1rem;
  border-radius: 0.3rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`
