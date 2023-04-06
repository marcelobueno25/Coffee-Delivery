import { CardContainer } from '../../../../components/CardContainer/styles'
import { TitleText } from '../../../../components/Typography'
import { CheckoutHeader } from './styles'
import { MapPinLine } from 'phosphor-react'
import { CheckoutForm } from '../Form'

export function CompleteOrder() {
  return (
    <div>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <CardContainer>
        <CheckoutHeader>
          <MapPinLine />
          <div>
            <p>Endereço de Entrega</p>
            <small>Informe o endereço onde deseja receber seu pedido</small>
          </div>
        </CheckoutHeader>
        <div>
          <CheckoutForm />
        </div>
      </CardContainer>
      <CardContainer>
        <CheckoutHeader>
          <MapPinLine />
          <div>
            <p>Pagamento</p>
            <small>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </small>
          </div>
        </CheckoutHeader>
      </CardContainer>
    </div>
  )
}
