import { Column, Row } from '../../../../components/Grid/styles'
import { CheckoutFormStyled } from './styles'

export function CheckoutForm() {
  return (
    <CheckoutFormStyled>
      <Row>
        <Column desktop={6}>
          <input id="checkoutCep" type="text" placeholder="CEP" />
        </Column>
        <Column desktop={6}>
          <input id="checkoutCep" type="text" placeholder="CEP" />
        </Column>
      </Row>
      {/* <input id="checkoutCep" type="text" placeholder="CEP" />
      <input id="checkoutRua" type="text" placeholder="Rua" />
      <input id="checkoutNumero" type="text" placeholder="Números" />
      <input id="checkoutComplemento" type="text" placeholder="Complemento" />
      <input id="checkoutBairro" type="text" placeholder="Bairro" />
      <input id="checkoutCidade" type="text" placeholder="Cidade" />
      <input className="col-2" id="checkoutUf" type="text" placeholder="UF" /> */}
    </CheckoutFormStyled>
  )
}
