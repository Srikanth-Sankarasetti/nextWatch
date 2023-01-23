import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import HomeMenuItems from '../HomeMenuItems'
import NextWatchContext from '../../context/NextWatchContext'
import HomeVideoItem from '../HomeVideoItem'

import {
  HomeMainContainer,
  HomeSubContainer,
  HomePrimeBanner,
  HomePrimeBannerCloseButton,
  HomePrimaBannerLogo,
  HomePrimaBannerPara,
  HomePrimaBannerGetButton,
  HomeVideoContainer,
  HomeSearchContainer,
  HomeSearchInput,
  SearchIconButton,
  HomeVideoOrederList,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHead,
  FailureViewPara,
  FailureViewButton,
  NoViewContainer,
} from './styledComponents'

const initialProgress = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    isbannerCloseClicked: false,
    searchInput: '',
    progressStatus: initialProgress.initial,
    homeVideos: [],
    search: '',
    isListLengthZero: false,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  searchEnter = () => {
    const {searchInput} = this.state
    this.setState({search: searchInput}, this.getHomeVideos)
  }

  changeInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  bannerClose = () => {
    this.setState({
      isbannerCloseClicked: true,
    })
  }

  retryVideos = () => {
    this.setState({isListLengthZero: false}, this.getHomeVideos)
  }

  retryVideosResult = () => {
    this.setState({isListLengthZero: false}, this.getHomeVideos)
  }

  getHomeVideos = async () => {
    this.setState({
      progressStatus: initialProgress.progress,
      isListLengthZero: false,
    })
    const {search} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Barear ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${search}`,
      options,
    )
    const data = await response.json()
    const videosList = data.videos
    if (response.ok === true) {
      const filterHomeVideos = videosList.map(each => ({
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
        homeVideos: filterHomeVideos,
        progressStatus: initialProgress.success,
      })
    }
    if (data.status_code === 400) {
      this.setState({
        progressStatus: initialProgress.failure,
      })
    }
    if (videosList.length === 0) {
      this.setState({isListLengthZero: true})
    }
  }

  renderVideosDetails = () => {
    const {homeVideos} = this.state
    return (
      <>
        <HomeVideoOrederList>
          {homeVideos.map(each => (
            <HomeVideoItem key={each.id} videosList={each} />
          ))}
        </HomeVideoOrederList>
      </>
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

  renderNoResultView = () => (
    <NextWatchContext.Consumer>
      {value => {
        const {isDarkActive} = value
        const {isListLengthZero} = this.state
        return (
          <NoViewContainer viewStatus={isListLengthZero}>
            <FailureViewImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureViewHead isDark={isDarkActive}>
              No Search results found
            </FailureViewHead>
            <FailureViewPara isDark={isDarkActive}>
              Try different key words or remove search filter.
            </FailureViewPara>
            <FailureViewButton type="button" onClick={this.retryVideosResult}>
              Retry
            </FailureViewButton>
          </NoViewContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )

  renderDetailsOnstatus = () => {
    const {progressStatus} = this.state
    switch (progressStatus) {
      case initialProgress.progress:
        return this.renderLoaderView()
      case initialProgress.success:
        return this.renderVideosDetails()
      case initialProgress.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <NextWatchContext.Consumer>
          {value => {
            const {isDarkActive} = value
            const {isbannerCloseClicked, searchInput} = this.state
            return (
              <>
                <Header />
                <HomeMainContainer data-testid="home">
                  <HomeMenuItems />
                  <HomeSubContainer>
                    <HomePrimeBanner
                      bannerClosed={isbannerCloseClicked}
                      data-testid="banner"
                    >
                      <HomePrimeBannerCloseButton
                        type="button"
                        data-testid="close"
                        onClick={this.bannerClose}
                      >
                        <AiOutlineClose />
                      </HomePrimeBannerCloseButton>
                      <HomePrimaBannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <HomePrimaBannerPara>
                        Buy Nxt Watch Premium prepaid plan with UPI
                      </HomePrimaBannerPara>
                      <HomePrimaBannerGetButton type="button">
                        GET IT NOW
                      </HomePrimaBannerGetButton>
                    </HomePrimeBanner>
                    <HomeVideoContainer isDark={isDarkActive}>
                      <HomeSearchContainer>
                        <HomeSearchInput
                          type="search"
                          placeholder="Search"
                          value={searchInput}
                          onChange={this.changeInputValue}
                          isDark={isDarkActive}
                        />
                        <SearchIconButton
                          type="button"
                          data-testid="searchButton"
                          onClick={this.searchEnter}
                        >
                          <AiOutlineSearch />
                        </SearchIconButton>
                      </HomeSearchContainer>
                      {this.renderDetailsOnstatus()}
                      {this.renderNoResultView()}
                    </HomeVideoContainer>
                  </HomeSubContainer>
                </HomeMainContainer>
              </>
            )
          }}
        </NextWatchContext.Consumer>
      </>
    )
  }
}

export default Home
