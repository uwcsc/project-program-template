import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
  background: #2c2591;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px)) /2;
  z-indexL 10;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 18pt;

  &.active {
    color: #15cdfc;
  }
`

export const NavLogo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 25pt;
  margin-left: 2em;

  &.active {
    color: #15cdfc;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  margin-left: 15px;
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  padding: 10px 22px;
  background: #256ce1;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606
  }
`