import { Column, Row } from '../../../../components/Grid/styles'
import { CheckoutFormStyled } from './styles'

export function CheckoutForm() {
  return (
    <CheckoutFormStyled>
      <Row>
        <Column mobile={12} tablet={12} desktop={5}>
          <input id="checkoutCep" type="text" placeholder="CEP" />
        </Column>
      </Row>
      <Row>
        <Column mobile={12} tablet={12} desktop={12}>
          <input id="checkoutRua" type="text" placeholder="Rua" />
        </Column>
      </Row>
      <Row>
        <Column mobile={12} tablet={12} desktop={5}>
          <input id="checkoutNumero" type="text" placeholder="Números" />
        </Column>
        <Column mobile={12} tablet={12} desktop={7}>
          <input
            id="checkoutComplemento"
            type="text"
            placeholder="Complemento"
          />
        </Column>
      </Row>
      <Row>
        <Column mobile={12} tablet={12} desktop={5}>
          <input id="checkoutBairro" type="text" placeholder="Bairro" />
        </Column>
        <Column mobile={12} tablet={12} desktop={5}>
          <input id="checkoutCidade" type="text" placeholder="Cidade" />
        </Column>
        <Column mobile={12} tablet={12} desktop={2}>
          <input
            className="col-2"
            id="checkoutUf"
            type="text"
            placeholder="UF"
          />
        </Column>
      </Row>
    </CheckoutFormStyled>
  )
}
