import {
  GamingVideoList,
  GamingVideoImages,
  GamingVideoPara,
  GamingVideoPara1,
  GamingVideoLink,
} from './styledComponents'

import NextWatchContext from '../../context/NextWatchContext'

const GamingVideoItem = props => {
  const {gamingVideos} = props
  const {id, thumbnailUrl, title, viewCount} = gamingVideos
  return (
    <NextWatchContext.Consumer>
      {value => {
        const {isDarkActive} = value
        return (
          <GamingVideoList>
            <GamingVideoLink to={`/videos/${id}`}>
              <GamingVideoImages src={thumbnailUrl} alt="video thumbnail" />
              <GamingVideoPara isDark={isDarkActive}>{title}</GamingVideoPara>
              <GamingVideoPara1>
                {viewCount} Watching Worldwide
              </GamingVideoPara1>
            </GamingVideoLink>
          </GamingVideoList>
        )
      }}
    </NextWatchContext.Consumer>
  )
}

export default GamingVideoItem
