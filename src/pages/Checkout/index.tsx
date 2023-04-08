import { CardCoffeeSelected } from './components/CardCoffeeSelected'
import { CompleteOrder } from './components/CompleteOrder'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder />
      <CardCoffeeSelected />
    </CheckoutContainer>
  )
}
