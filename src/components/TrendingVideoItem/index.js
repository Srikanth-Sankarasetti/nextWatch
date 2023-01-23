import {
  TrendingVideoListContainer,
  TrendingVideoListImage,
  TrendingVideoListDetailsContainer,
  TrendingVideoListPara,
  TrendingVideoViewContainer,
  TrendingVideoListParaCount,
  TrendingLinks,
} from './styledComponents'

import NextWatchContext from '../../context/NextWatchContext'

const TrendingVideoItem = props => {
  const {trendingVideoList} = props
  const {
    name,
    profileImageUrl,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = trendingVideoList
  return (
    <NextWatchContext.Consumer>
      {value => {
        const {isDarkActive} = value
        return (
          <TrendingLinks to={`/videos/${id}`}>
            <TrendingVideoListContainer>
              <TrendingVideoListImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoListDetailsContainer>
                <TrendingVideoListPara isDark={isDarkActive}>
                  {title}
                </TrendingVideoListPara>
                <TrendingVideoListParaCount>{name}</TrendingVideoListParaCount>
                <TrendingVideoViewContainer>
                  <TrendingVideoListParaCount>
                    {viewCount} views
                  </TrendingVideoListParaCount>
                  <TrendingVideoListParaCount>
                    . {publishedAt}
                  </TrendingVideoListParaCount>
                </TrendingVideoViewContainer>
              </TrendingVideoListDetailsContainer>
            </TrendingVideoListContainer>
          </TrendingLinks>
        )
      }}
    </NextWatchContext.Consumer>
  )
}

export default TrendingVideoItem
