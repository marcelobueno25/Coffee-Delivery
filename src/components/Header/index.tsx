import { HeaderContainer, Location, ShoppingContent } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ButtonIcon } from '../ButtonIcon'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo Coffee delivery" />
      <div>
        <ShoppingContent>
          <Location>
            <MapPin weight="fill" color="#4B2995" size={20} />
            <p>Porto Alegre, RS</p>
          </Location>
          <ButtonIcon>
            <ShoppingCart weight="fill" color="#C47F17" size={20} />
          </ButtonIcon>
        </ShoppingContent>
      </div>
    </HeaderContainer>
  )
}
