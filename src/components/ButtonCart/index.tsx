import { ButtonCartStyled } from './styles'
import { ShoppingCart } from 'phosphor-react'

export function ButtonCart() {
  return (
    <ButtonCartStyled>
      <ShoppingCart weight="fill" color="#C47F17" />
      <span>
        <p>5</p>
      </span>
    </ButtonCartStyled>
  )
}
