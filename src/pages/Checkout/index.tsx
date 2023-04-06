import { CoffeeSelected } from './components/CoffeeSelected'
import { CompleteOrder } from './components/CompleteOrder'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder />
      <CoffeeSelected />
    </CheckoutContainer>
  )
}
