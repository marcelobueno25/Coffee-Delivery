import styled from 'styled-components'

export const CounterContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90px;
  border-radius: 0.4em;
  padding: 0 10px;
  height: 2.2rem;
  margin: 0 5px;

  .counterAdd,
  .counterRemove {
    color: ${(props) => props.theme['purple-dark']};
    width: 40px;
    height: 40px;

    cursor: pointer;
    transition: 0.5s;

    &:hover {
      transform: scale(1.2);
    }
  }
`

export const CounterInput = styled.input`
  background: ${(props) => props.theme['base-button']};
  border: none;
  font-size: 25;
  padding: 5px;
  width: 100%;
  text-align: center;
  margin: 0 5px;

  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`
