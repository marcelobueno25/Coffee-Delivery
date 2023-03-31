import styled from 'styled-components'

export const CounterContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80px;
  border-radius: 10px;
  padding: 0 10px;
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
