import { CounterContainer, CounterInput } from './styles'
import { Plus, Minus } from 'phosphor-react'

export function Counter() {
  return (
    <CounterContainer>
      <Plus weight="bold" color="#4B2995" size={25} />
      <CounterInput type={'number'} value={1} max={'99'} min={'1'} />
      <Minus weight="bold" color="#4B2995" size={25} />
    </CounterContainer>
  )
}
