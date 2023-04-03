import { HeaderContainer, Location, ShoppingContent } from './styles'
import { MapPin } from 'phosphor-react'
import { ButtonCart } from '../ButtonCart'
import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="Logo Coffee delivery" />
      </NavLink>
      <div>
        <ShoppingContent>
          <Location>
            <MapPin weight="fill" />
            <p>São Paulo, SP</p>
          </Location>
          <NavLink to="/checkout">
            <ButtonCart />
          </NavLink>
        </ShoppingContent>
      </div>
    </HeaderContainer>
  )
}
