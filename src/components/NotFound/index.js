import Header from '../Header'
import HomeMenuItems from '../HomeMenuItems'
import NextWatchContext from '../../context/NextWatchContext'

import {
  NotFoundMainContainer,
  NotFoundImage,
  NotFoundSubContainer,
  NotFoundHead,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <NextWatchContext.Consumer>
    {value => {
      const {isDarkActive} = value
      const notFoundImage = isDarkActive
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NotFoundMainContainer>
            <HomeMenuItems />
            <NotFoundSubContainer isDark={isDarkActive}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHead isDark={isDarkActive}>Page Not Found</NotFoundHead>
              <NotFoundPara>
                we are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundSubContainer>
          </NotFoundMainContainer>
        </>
      )
    }}
  </NextWatchContext.Consumer>
)

export default NotFound
