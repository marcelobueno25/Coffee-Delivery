import { CardContainer } from '../../../../components/CardContainer/styles'
import { TitleText } from '../../../../components/Typography'
import { CheckoutHeader } from './styles'
import { MapPinLine } from 'phosphor-react'

export function CoffeeSelected() {
  return (
    <div>
      <div className="checkoutRight">
        <TitleText size="xs" color="subtitle">
          Cafés selecionados
        </TitleText>
        <CardContainer>
          <CheckoutHeader>
            <MapPinLine />
            <div>
              <p>Endereço de Entrega</p>
              <small>Informe o endereço onde deseja receber seu pedido</small>
            </div>
          </CheckoutHeader>
        </CardContainer>
      </div>
    </div>
  )
}
