import HeaderCoffee from '../../../../assets/header-coffee.svg'
import { MapPin } from 'phosphor-react'
import { IntroContainer, ListItems, Item } from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ListItems>
          <Item>
            <MapPin weight="fill" color="#4B2995" size={20} />
            <p>Compra simples e segura</p>
          </Item>
          <Item>
            <MapPin weight="fill" color="#4B2995" size={20} />
            <p>Compra simples e segura</p>
          </Item>
          <Item>
            <MapPin weight="fill" color="#4B2995" size={20} />
            <p>Compra simples e segura</p>
          </Item>
          <Item>
            <MapPin weight="fill" color="#4B2995" size={20} />
            <p>Compra simples e segura</p>
          </Item>
        </ListItems>
      </div>
      <div>
        <img src={HeaderCoffee} alt="Copo de cafe" />
      </div>
    </IntroContainer>
  )
}
