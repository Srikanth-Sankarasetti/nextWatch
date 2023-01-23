import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#181818' : '')};
`

export const HeaderWebsiteLogo = styled.img`
  width: 50%;
`

export const HeaderSubContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const HeaderThemeButton = styled.button`
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
`

export const HeaderProfileImage = styled.img`
  width: 16%;
`

export const HeaderTriggerContainer = styled.div``

export const HeaderLogoutButton = styled.button`
  border: 2px solid ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  width: 130%;
  border-radius: 6px;
`

export const HeaderPopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  width: 130%;
  width: 400px;
  height: 25vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeaderPopupPara = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-weight: bold;
`
export const HeaderPopupCancelAndConfirm = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`

export const HeaderPopupCancel = styled.button`
  background-color: transparent;
  border: 1px solid #616e7c;
  color: #616e7c;
  width: 100px;
  height: 35px;
  cursor: pointer;
  border-radius: 4px;
`

export const HeaderPopupConfirm = styled.button`
  width: 100px;
  height: 35px;
  background-color: #3b82f6;
  color: #ffffff;
  border-style: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
`
