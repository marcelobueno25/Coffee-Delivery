import { CardContainer } from '../../components/CardContainer/styles'
import { CheckoutForm } from './components/Form'
import { CheckoutContainer, CheckoutHeader } from './styles'
import { MapPinLine } from 'phosphor-react'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h3>Complete seu pedido</h3>
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
      <div>
        <h3>Cafés selecionados</h3>
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
    </CheckoutContainer>
  )
}
