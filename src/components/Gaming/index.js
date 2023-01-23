import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import HomeMenuItems from '../HomeMenuItems'
import NextWatchContext from '../../context/NextWatchContext'
import GamingVideoItem from '../GamingVideoItem'

import {GamingMainCaontainer, GamingVideosUlList} from './styledComponents'

import {
  TrendingNameHeadContainer,
  TrendingSubContainer,
  TrendingHead,
  TrendingPara,
} from '../Trending/styledComponents'

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

class Gaming extends Component {
  state = {
    gamingVideos: [],
    progressStatus: initialProgress.initial,
  }

  componentDidMount() {
    this.getGamingDetails()
  }

  getGamingDetails = async () => {
    this.setState({progressStatus: initialProgress.progress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Barear ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)
    const data = await response.json()
    const gameList = data.videos
    console.log(data)
    if (response.ok === true) {
      const filterGameVideos = gameList.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideos: filterGameVideos,
        progressStatus: initialProgress.success,
      })
    }
    if (data.status_code === 400) {
      this.setState({progressStatus: initialProgress.failure})
    }
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

  renderGamingDetails = () => {
    const {gamingVideos} = this.state
    return (
      <NextWatchContext.Consumer>
        {value => {
          const {isDarkActive} = value
          return (
            <GamingVideosUlList isDark={isDarkActive}>
              {gamingVideos.map(each => (
                <GamingVideoItem key={each.id} gamingVideos={each} />
              ))}
            </GamingVideosUlList>
          )
        }}
      </NextWatchContext.Consumer>
    )
  }

  renderGamingDetailsOnStatus = () => {
    const {progressStatus} = this.state
    switch (progressStatus) {
      case initialProgress.progress:
        return this.renderLoaderView()
      case initialProgress.success:
        return this.renderGamingDetails()
      case initialProgress.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {gamingVideos} = this.state
    console.log(gamingVideos)
    return (
      <NextWatchContext.Consumer>
        {value => {
          const {isDarkActive} = value
          return (
            <>
              <Header />
              <GamingMainCaontainer>
                <HomeMenuItems />
                <TrendingSubContainer>
                  <TrendingNameHeadContainer isDark={isDarkActive}>
                    <TrendingPara>
                      <HiFire color="red" size={50} />
                    </TrendingPara>
                    <TrendingHead isDark={isDarkActive}>Gaming</TrendingHead>
                  </TrendingNameHeadContainer>
                  {this.renderGamingDetailsOnStatus()}
                </TrendingSubContainer>
              </GamingMainCaontainer>
            </>
          )
        }}
      </NextWatchContext.Consumer>
    )
  }
}

export default Gaming
