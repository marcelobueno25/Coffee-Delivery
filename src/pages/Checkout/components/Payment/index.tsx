import { CreditCard, Bank, Money } from 'phosphor-react'
import { Select } from '../../../../components/Select'
import { PaymentContainer } from './styles'

export function Payment() {
  return (
    <PaymentContainer>
      <Select title="Endereço de Entrega" icon={<CreditCard />} />
      <Select title="Cartão de Débito" icon={<Bank />} />
      <Select active title="Dinheiro" icon={<Money />} />
    </PaymentContainer>
  )
}
