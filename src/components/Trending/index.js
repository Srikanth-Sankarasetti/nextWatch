import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import HomeMenuItems from '../HomeMenuItems'
import TrendingVideoItem from '../TrendingVideoItem'
import NextWatchContext from '../../context/NextWatchContext'

import {
  TrendingMainContainer,
  TrendingNameHeadContainer,
  TrendingSubContainer,
  TrendingHead,
  TrendingPara,
  TrendingVideoContainer,
  TrendingVideoUl,
} from './styledComponents'

import {
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHead,
  FailureViewPara,
  FailureViewButton,
  NoViewContainer,
} from '../Home/styledComponents'

const initialProgress = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    progressStatus: initialProgress.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  retryVideos = () => {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({progressStatus: initialProgress.progress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Barear ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(
      'https://apis.ccbp.in/videos/trending',
      options,
    )
    const data = await response.json()
    const videosList = data.videos
    if (response.ok === true) {
      const filterTrendingVideos = videosList.map(each => ({
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        id: each.id,
        publishedAt: formatDistanceToNow(new Date(each.published_at), {
          addSuffix: true,
        }),
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        trendingVideos: filterTrendingVideos,
        progressStatus: initialProgress.success,
      })
    }
    if (data.status_code === 400) {
      this.setState({progressStatus: initialProgress.failure})
    }
  }

  renderTrendingVideos = () => {
    const {trendingVideos} = this.state
    return (
      <NextWatchContext.Consumer>
        {value => {
          const {isDarkActive} = value
          return (
            <>
              <TrendingVideoContainer isDark={isDarkActive}>
                <TrendingVideoUl>
                  {trendingVideos.map(each => (
                    <TrendingVideoItem key={each.id} trendingVideoList={each} />
                  ))}
                </TrendingVideoUl>
              </TrendingVideoContainer>
            </>
          )
        }}
      </NextWatchContext.Consumer>
    )
  }

  renderLoaderView = () => (
    <NextWatchContext.Consumer>
      {value => {
        const {isDarkActive} = value
        return (
          <LoaderContainer data-testid="loader" isDark={isDarkActive}>
            <Loader type="ThreeDots" color="blue" width={50} height={50} />
          </LoaderContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )

  renderFailureView = () => (
    <NextWatchContext.Consumer>
      {value => {
        const {isDarkActive} = value
        const failureImage = isDarkActive
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer isDark={isDarkActive}>
            <FailureViewImage src={failureImage} alt="failure view" />
            <FailureViewHead isDark={isDarkActive}>
              Oops! Something Went Wrong
            </FailureViewHead>
            <FailureViewPara isDark={isDarkActive}>
              We are having some trouble to complete your request.Please try
              again.
            </FailureViewPara>
            <FailureViewButton type="button" onClick={this.retryVideos}>
              Retry
            </FailureViewButton>
          </FailureViewContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )

  renderTrendingVideosOnStatus = () => {
    const {progressStatus} = this.state
    switch (progressStatus) {
      case initialProgress.progress:
        return this.renderLoaderView()
      case initialProgress.success:
        return this.renderTrendingVideos()
      case initialProgress.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NextWatchContext.Consumer>
        {value => {
          const {isDarkActive} = value
          return (
            <>
              <Header />
              <TrendingMainContainer>
                <HomeMenuItems />
                <TrendingSubContainer>
                  <TrendingNameHeadContainer isDark={isDarkActive}>
                    <TrendingPara>
                      <HiFire color="red" size={50} />
                    </TrendingPara>
                    <TrendingHead isDark={isDarkActive}>Trending</TrendingHead>
                  </TrendingNameHeadContainer>
                  {this.renderTrendingVideosOnStatus()}
                </TrendingSubContainer>
              </TrendingMainContainer>
            </>
          )
        }}
      </NextWatchContext.Consumer>
    )
  }
}

export default Trending
