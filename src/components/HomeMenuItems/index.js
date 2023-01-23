import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import NextWatchContext from '../../context/NextWatchContext'

import {
  MenuItemsMainContainer,
  MenuItemContainer,
  MenuItemCustomButton,
  MenuItemTextHead,
  Links,
  MenuItemContactContainer,
  MenuItemContactPara,
  MenuItemContactLogoContainer,
  MenuItemContactSocialLogo,
} from './styledComponents'

class HomeMenuItems extends Component {
  state = {
    isActiveHome: 'false',
    pathName: '/',
  }

  componentDidMount() {
    const {location} = this.props
    const {pathname} = location
    this.setState({pathName: pathname})
  }

  render() {
    return (
      <NextWatchContext.Consumer>
        {value => {
          const {isDarkActive} = value
          const {pathName} = this.state
          const homeactive = pathName === '/'
          const trendingActive = pathName === '/trending'
          const gamingActive = pathName === '/gaming'
          const savedActive = pathName === '/saved-videos'
          const homeIconColor = homeactive ? 'red' : ''
          const trendingColor = trendingActive ? 'red' : ''
          const gameColor = gamingActive ? 'red' : ''
          const savedColor = savedActive ? 'red' : ''
          return (
            <MenuItemsMainContainer isDark={isDarkActive}>
              <MenuItemContainer>
                <Links to="/" isHomeActive={homeactive}>
                  <MenuItemCustomButton type="button" isDark={isDarkActive}>
                    <AiFillHome size={20} color={homeIconColor} />
                    <MenuItemTextHead>Home</MenuItemTextHead>
                  </MenuItemCustomButton>
                </Links>
                <Links to="/trending" istrending={trendingActive}>
                  <MenuItemCustomButton type="button" isDark={isDarkActive}>
                    <HiFire size={20} color={trendingColor} />
                    <MenuItemTextHead>Trending</MenuItemTextHead>
                  </MenuItemCustomButton>
                </Links>
                <Links to="/gaming" isgaming={gamingActive}>
                  <MenuItemCustomButton type="button" isDark={isDarkActive}>
                    <SiYoutubegaming size={20} color={gameColor} />
                    <MenuItemTextHead>Gaming</MenuItemTextHead>
                  </MenuItemCustomButton>
                </Links>
                <Links to="/saved-videos" isSaved={savedActive}>
                  <MenuItemCustomButton type="button" isDark={isDarkActive}>
                    <RiMenuAddFill size={20} color={savedColor} />
                    <MenuItemTextHead>Saved Videos</MenuItemTextHead>
                  </MenuItemCustomButton>
                </Links>
              </MenuItemContainer>
              <MenuItemContactContainer>
                <MenuItemContactPara isDark={isDarkActive}>
                  CONTACT US
                </MenuItemContactPara>
                <MenuItemContactLogoContainer>
                  <MenuItemContactSocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <MenuItemContactSocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <MenuItemContactSocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </MenuItemContactLogoContainer>
                <MenuItemContactPara isDark={isDarkActive}>
                  Enjoy! Now to see your channels and recommendations!
                </MenuItemContactPara>
              </MenuItemContactContainer>
            </MenuItemsMainContainer>
          )
        }}
      </NextWatchContext.Consumer>
    )
  }
}

export default withRouter(HomeMenuItems)
