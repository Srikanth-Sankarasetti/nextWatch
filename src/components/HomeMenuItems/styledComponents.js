import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MenuItemsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  width: 18%;
  flex-shrink: 0;
  background-color: ${props => (props.isDark ? '#181818' : '')};
`

export const MenuItemContainer = styled.nav`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const MenuItemCustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isDark ? '#ffffff' : '')};
`

export const MenuItemTextHead = styled.li`
  font-size: 20px;
  text-align: center;
  list-style-type: none;
`

export const Links = styled(Link)`
  text-decoration: none;
  background-color: ${props =>
    (props.isHomeActive ||
      props.istrending ||
      props.isgaming ||
      props.isSaved) === true
      ? '#7e858e'
      : ''};
  :hover {
    background-color: #d7dfe9;
  }
`

export const MenuItemContactContainer = styled.div`
  padding-left: 25px;
`

export const MenuItemContactPara = styled.p`
  color: #212121;
  padding-top: 10px;
  color: ${props => (props.isDark ? '#ffffff' : '')};
`
export const MenuItemContactLogoContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
`

export const MenuItemContactSocialLogo = styled.img`
  width: 18%;
`
