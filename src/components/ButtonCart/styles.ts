import styled from 'styled-components'

export const ButtonCartStyled = styled.button`
  position: relative;
  border: none;
  min-height: 2.2rem;
  min-width: 2.2rem;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 0.4rem;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.yellow};
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    top: -30%;
    right: -30%;
    height: 20px;
    width: 20px;

    p {
      font-size: 0.9rem;
    }
  }
`
