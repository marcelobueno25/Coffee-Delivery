import { CheckoutFormStyled } from './styles'

export function CheckoutForm() {
  return (
    <CheckoutFormStyled>
      <input type="text" placeholder="CEP" />
      <input type="text" placeholder="Rua" />
      <input type="text" placeholder="Números" />
      <input type="text" placeholder="Complemento" />
      <input type="text" placeholder="Bairro" />
      <input type="text" placeholder="Cidade" />
      <input type="text" placeholder="UF" />
    </CheckoutFormStyled>
  )
}
