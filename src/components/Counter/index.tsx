import { useState, useEffect } from 'react'
import { CounterContainer, CounterInput } from './styles'
import { Plus, Minus } from 'phosphor-react'

export function Counter() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    console.log('Count: ', count)
  }, [])

  const handleCountIncrement = () => {
    if (count < 99) setCount((state) => (state += 1))
  }

  const handleCountDecrement = () => {
    if (count > 1) setCount((state) => (state -= 1))
  }

  return (
    <CounterContainer>
      <Minus
        className="counterRemove"
        onClick={handleCountDecrement}
        weight="bold"
      />
      <CounterInput disabled type="number" value={count} max={'99'} min={'1'} />
      <Plus
        className="counterAdd"
        onClick={handleCountIncrement}
        weight="bold"
      />
    </CounterContainer>
  )
}
