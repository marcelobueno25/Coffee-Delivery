import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'
import successCheck from '../../assets/successCheck.svg'
import { RegularText, TitleText } from '../../components/Typography'
import { SucessContainer, OrderConfirmed, OrderConfirmedInfo } from './styles'

export function Success() {
  return (
    <SucessContainer>
      <OrderConfirmed>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
        <OrderConfirmedInfo>
          <div>
            <MapPin weight="fill" />
            <div>
              <p>
                Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
                Alegre, RS
              </p>
            </div>
          </div>
          <div>
            <Timer weight="fill" />
            <div>
              <p>Previsão de entrega 20 min - 30 min</p>
            </div>
          </div>
          <div>
            <CurrencyDollar weight="bold" />
            <div>
              <p>Pagamento na entrega Cartão de Crédito</p>
            </div>
          </div>
        </OrderConfirmedInfo>
      </OrderConfirmed>
      <img
        src={successCheck}
        alt={'Imagem de um homem em cima de uma motocicleta'}
      />
    </SucessContainer>
  )
}
