import HeaderCoffee from '../../../../assets/header-coffee.svg'
import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react'
import {
  IntroContainer,
  IntroLeft,
  IntroRight,
  ListItems,
  ItemCicle,
  Item,
  TitleContend,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <IntroLeft>
        <TitleContend>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleContend>
        <ListItems>
          <Item>
            <ItemCicle>
              <ShoppingCart weight="fill" color="#ffff" size={16} />
            </ItemCicle>
            <p>Compra simples e segura</p>
          </Item>
          <Item>
            <ItemCicle>
              <Package weight="fill" color="#ffff" size={16} />
            </ItemCicle>
            <p>Embalagem mantém o café intacto</p>
          </Item>
          <Item>
            <ItemCicle>
              <Coffee weight="fill" color="#ffff" size={16} />
            </ItemCicle>
            <p>Entrega rápida e rastreada</p>
          </Item>
          <Item>
            <ItemCicle>
              <Timer weight="fill" color="#ffff" size={16} />
            </ItemCicle>
            <p>O café chega fresquinho até você</p>
          </Item>
        </ListItems>
      </IntroLeft>
      <IntroRight>
        <img src={HeaderCoffee} alt="Copo de cafe" />
      </IntroRight>
    </IntroContainer>
  )
}
