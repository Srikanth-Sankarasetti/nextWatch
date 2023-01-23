import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import HomeMenuItems from '../HomeMenuItems'
import NextWatchContext from '../../context/NextWatchContext'

import {
  SavedVideosMainContainer,
  SavedVideosNoVideosContainer,
  SavedNoVideosImage,
  SavedVideosHead,
  SavedVideosPara,
} from './styledComponents'
import TrendingVideoItem from '../TrendingVideoItem'
import {
  TrendingNameHeadContainer,
  TrendingSubContainer,
  TrendingHead,
  TrendingPara,
  TrendingVideoContainer,
  TrendingVideoUl,
} from '../Trending/styledComponents'

const SavedVideos = () => {
  const renderTrendingVideos = () => (
    <NextWatchContext.Consumer>
      {value => {
        const {isDarkActive, savedVideos} = value
        return (
          <>
            <TrendingSubContainer>
              <TrendingNameHeadContainer isDark={isDarkActive}>
                <TrendingPara>
                  <HiFire color="red" size={50} />
                </TrendingPara>
                <TrendingHead isDark={isDarkActive}>Saved Videos</TrendingHead>
              </TrendingNameHeadContainer>
              <TrendingVideoContainer isDark={isDarkActive}>
                <TrendingVideoUl>
                  {savedVideos.map(each => (
                    <TrendingVideoItem key={each.id} trendingVideoList={each} />
                  ))}
                </TrendingVideoUl>
              </TrendingVideoContainer>
            </TrendingSubContainer>
          </>
        )
      }}
    </NextWatchContext.Consumer>
  )

  const renderNoVideosDetails = () => (
    <NextWatchContext.Consumer>
      {value => {
        const {isDarkActive} = value
        return (
          <>
            <SavedVideosNoVideosContainer isDark={isDarkActive}>
              <SavedNoVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <SavedVideosHead isDark={isDarkActive}>
                No Saved videos found
              </SavedVideosHead>
              <SavedVideosPara>
                You can save your videos while watching them
              </SavedVideosPara>
            </SavedVideosNoVideosContainer>
          </>
        )
      }}
    </NextWatchContext.Consumer>
  )

  return (
    <NextWatchContext.Consumer>
      {value => {
        const {isDarkActive, savedVideos} = value
        const details =
          savedVideos.length === 0
            ? renderNoVideosDetails()
            : renderTrendingVideos()
        return (
          <>
            <Header />
            <SavedVideosMainContainer>
              <HomeMenuItems />
              {details}
            </SavedVideosMainContainer>
          </>
        )
      }}
    </NextWatchContext.Consumer>
  )
}

export default SavedVideos
