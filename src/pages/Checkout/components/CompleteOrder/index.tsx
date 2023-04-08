import { TitleText } from '../../../../components/Typography'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { CheckoutForm } from '../Form'
import { CardCoffee } from '../CardCoffee'
import { Payment } from '../Payment'

export function CompleteOrder() {
  return (
    <div>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <CardCoffee
        title="Endereço de Entrega"
        subtitle={'Informe o endereço onde deseja receber seu pedido'}
        icon={<MapPinLine />}
      >
        <CheckoutForm />
      </CardCoffee>

      <CardCoffee
        title="Pagamento"
        subtitle={
          'O pagamento é feito na entrega. Escolha a forma que deseja pagar'
        }
        icon={<CurrencyDollar color="#8047F8" />}
      >
        <Payment />
      </CardCoffee>
    </div>
  )
}
