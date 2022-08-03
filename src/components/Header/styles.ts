import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.background};
`

export const Menu = styled.nav`
  display: flex;
  gap: 0.75rem;
`

const BaseLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
`

export const LinkLocation = styled(BaseLink)`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const LinkKart = styled(BaseLink)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  position: relative;
`

export const CountKart = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0.625rem;
  right: -0.625rem;
  border-radius: 9999px;

  font-size: 0.75rem;
  font-weight: 700;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-dark']};
`
