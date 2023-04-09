import { ButtonIconStyled } from './styles'
import { ShoppingCartSimple } from 'phosphor-react'

export function ButtonIcon({ coffee, handleAddCoffee }: any) {
  return (
    <ButtonIconStyled onClick={() => handleAddCoffee(coffee)}>
      <ShoppingCartSimple weight="fill" />
    </ButtonIconStyled>
  )
}
