import {
  HeaderContainer,
  LinkKart,
  LinkLocation,
  Menu,
  CountKart,
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'

export function Header() {
  const { orderCoffees } = useContext(CoffeesContext)
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src="/assets/logo.svg"
          alt="Logotipo com imagem de copo de café e texto que diz: Coffee Delivery"
        />
      </NavLink>
      <Menu>
        <LinkLocation to="">
          <MapPin weight="fill" size={22} />
          São João da Barra, RJ
        </LinkLocation>
        <LinkKart to="/checkout">
          <ShoppingCart weight="fill" size={22} />
          {orderCoffees.length ? (
            <CountKart>{orderCoffees.length}</CountKart>
          ) : (
            ''
          )}
        </LinkKart>
      </Menu>
    </HeaderContainer>
  )
}
