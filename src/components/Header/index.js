import {Link, withRouter} from 'react-router-dom'
import {HiMoon, HiOutlineSun} from 'react-icons/hi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {
  HeaderMainContainer,
  HeaderWebsiteLogo,
  HeaderSubContainer,
  HeaderThemeButton,
  HeaderProfileImage,
  HeaderTriggerContainer,
  HeaderLogoutButton,
  HeaderPopupContainer,
  HeaderPopupPara,
  HeaderPopupCancel,
  HeaderPopupConfirm,
  HeaderPopupCancelAndConfirm,
} from './styledComponents'
import NextWatchContext from '../../context/NextWatchContext'

const overlayStyles = {
  backgroundColor: '#94a3b8',
  opacity: '0.9',
}

const Header = props => {
  const logOutApp = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NextWatchContext.Consumer>
      {value => {
        const {isDarkActive, darkStatusChange} = value
        const changeTheme = () => {
          darkStatusChange()
        }
        const themImage = isDarkActive ? (
          <HiOutlineSun size={40} color="#ffffff" />
        ) : (
          <HiMoon size={40} />
        )
        const headerLogo = isDarkActive
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <>
            <HeaderMainContainer isDark={isDarkActive}>
              <Link to="/">
                <HeaderWebsiteLogo src={headerLogo} alt="website logo" />
              </Link>
              <HeaderSubContainer>
                <HeaderThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={changeTheme}
                >
                  {themImage}
                </HeaderThemeButton>
                <HeaderProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <HeaderTriggerContainer>
                  <Popup
                    modal
                    trigger={
                      <HeaderLogoutButton type="button" isDark={isDarkActive}>
                        Logout
                      </HeaderLogoutButton>
                    }
                    overlayStyle={overlayStyles}
                  >
                    {close => (
                      <>
                        <HeaderPopupContainer isDark={isDarkActive}>
                          <HeaderPopupPara isDark={isDarkActive}>
                            Are you sure want to logout?
                          </HeaderPopupPara>
                          <HeaderPopupCancelAndConfirm>
                            <HeaderPopupCancel
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </HeaderPopupCancel>
                            <HeaderPopupConfirm
                              type="button"
                              onClick={logOutApp}
                            >
                              Confirm
                            </HeaderPopupConfirm>
                          </HeaderPopupCancelAndConfirm>
                        </HeaderPopupContainer>
                      </>
                    )}
                  </Popup>
                </HeaderTriggerContainer>
              </HeaderSubContainer>
            </HeaderMainContainer>
          </>
        )
      }}
    </NextWatchContext.Consumer>
  )
}

export default withRouter(Header)
