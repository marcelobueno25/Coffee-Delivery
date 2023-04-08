import styled from 'styled-components'

export const CheckoutCardCoffee = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  text-align: center;
  background: ${(props) => props.theme.colors['base-card']};
  width: 100%;
  border-radius: 0.5em 1.5em 0.5em 1.5em;
  padding: 2rem;
  user-select: none;
  margin: 10px 0;
  max-width: 100%;
`

export const CheckoutHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: left;
  margin-bottom: 1rem;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: ${(props) => props.theme.colors['yellow-dark']};
    margin-right: 0.5em;
  }
`
