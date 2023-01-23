import NextWatchContext from '../../context/NextWatchContext'
import {
  HomeVideosList,
  HomeVideoImage,
  Links,
  HomeVideoChanelContainer,
  HomeVideoChannelImage,
  HomeVideoChannelDetailsContainer,
  HomeVideoChannelTitle,
  HomeVideoChannelPara,
  HomeVideoChanelViewsContainer,
} from './styledComponents'

const HomeVideoItem = props => {
  const {videosList} = props
  const {
    name,
    profileImageUrl,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videosList
  return (
    <NextWatchContext.Consumer>
      {value => {
        const {isDarkActive} = value
        return (
          <>
            <HomeVideosList>
              <Links to={`/videos/${id}`}>
                <HomeVideoImage src={thumbnailUrl} alt="video thumbnail" />
                <HomeVideoChanelContainer>
                  <HomeVideoChannelImage
                    src={profileImageUrl}
                    alt="profile_image_url"
                  />
                  <HomeVideoChannelDetailsContainer>
                    <HomeVideoChannelTitle isDark={isDarkActive}>
                      {title}
                    </HomeVideoChannelTitle>
                    <HomeVideoChannelPara isDark={isDarkActive}>
                      {name}
                    </HomeVideoChannelPara>
                    <HomeVideoChanelViewsContainer>
                      <HomeVideoChannelPara isDark={isDarkActive}>
                        {viewCount} views
                      </HomeVideoChannelPara>
                      <HomeVideoChannelPara isDark={isDarkActive}>
                        . {publishedAt}
                      </HomeVideoChannelPara>
                    </HomeVideoChanelViewsContainer>
                  </HomeVideoChannelDetailsContainer>
                </HomeVideoChanelContainer>
              </Links>
            </HomeVideosList>
          </>
        )
      }}
    </NextWatchContext.Consumer>
  )
}

export default HomeVideoItem
