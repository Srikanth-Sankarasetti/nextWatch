import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {RiMenuAddFill} from 'react-icons/ri'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import HomeMenuItems from '../HomeMenuItems'
import NextWatchContext from '../../context/NextWatchContext'

import {
  VideoItemDetailsMainContainer,
  VideoItemDetailsSubContainer,
  VideoItemDetailsHead,
  VideoItemDetailsLikeAndDislikeContainer,
  VideoItemDetailsViewsContainer,
  VideoItemDetailsPara,
  VideoItemDetailsLikeContainer,
  VideoItemDetailsButton1,
  VideoItemDetailsConst,
  VideoItemDetailsHorizental,
  VideoItemDetailsChannelLogo,
  VideoItemDetailsDescriptionChanel,
  VideoItemDetailsDescriptionPara,
  VideoItemDetailsDescriptionPara2,
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

class VideoItemDetails extends Component {
  state = {
    videoDetailsList: [],
    likeActive: false,
    dislikeActive: false,
    progressStatus: initialProgress.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onChangeSave = () => {
    const {videoDetailsList} = this.state
    const {savedClicked} = videoDetailsList
    this.setState(prevState => ({
      videoDetailsList: {
        ...prevState.videoDetailsList,
        savedClicked: !savedClicked,
      },
    }))
  }

  likeClicked = () => {
    this.setState(prevState => ({
      likeActive: !prevState.likeActive,
      dislikeActive: false,
    }))
  }

  disLikeClicked = () => {
    this.setState(prevState => ({
      likeActive: false,
      dislikeActive: !prevState.disLikeClicked,
    }))
  }

  retryVideos = () => {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({progressStatus: initialProgress.progress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const options = {
      headers: {
        Authorization: `Barear ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    const data = await response.json()
    const videoDetails = data.video_details
    if (response.ok === true) {
      const filterVideosDetails = {
        name: videoDetails.channel.name,
        profileImageUrl: videoDetails.channel.profile_image_url,
        subscriberCount: videoDetails.channel.subscriber_count,
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: formatDistanceToNow(new Date(videoDetails.published_at), {
          addSuffix: true,
        }),
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
        savedClicked: false,
      }
      this.setState({
        videoDetailsList: filterVideosDetails,
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

  renderVideoItemDetails = () => (
    <NextWatchContext.Consumer>
      {value => {
        const {isDarkActive, videosUpdate} = value
        const {videoDetailsList, likeActive, dislikeActive} = this.state
        const {
          name,
          profileImageUrl,
          subscriberCount,
          description,
          id,
          publishedAt,
          videoUrl,
          thumbnailUrl,
          title,
          viewCount,
          savedClicked,
        } = videoDetailsList

        const saveChanges = () => {
          this.onChangeSave()
          videosUpdate({...videoDetailsList})
        }
        const saveText = savedClicked ? 'Saved' : 'Save'
        return (
          <>
            <VideoItemDetailsSubContainer isDark={isDarkActive}>
              <ReactPlayer url={videoUrl} controls width="90%" height="70vh" />
              <VideoItemDetailsHead isDark={isDarkActive}>
                {title}
              </VideoItemDetailsHead>
              <VideoItemDetailsLikeAndDislikeContainer>
                <VideoItemDetailsViewsContainer>
                  <VideoItemDetailsPara>{viewCount} views</VideoItemDetailsPara>
                  <VideoItemDetailsPara>. {publishedAt}</VideoItemDetailsPara>
                </VideoItemDetailsViewsContainer>
                <VideoItemDetailsLikeContainer>
                  <VideoItemDetailsButton1
                    type="button"
                    onClick={this.likeClicked}
                    isLike={likeActive}
                  >
                    <AiFillLike />
                    <VideoItemDetailsPara>Like</VideoItemDetailsPara>
                  </VideoItemDetailsButton1>
                  <VideoItemDetailsButton1
                    type="button"
                    onClick={this.disLikeClicked}
                    isLike={dislikeActive}
                  >
                    <AiFillDislike />
                    <VideoItemDetailsPara>Dislike</VideoItemDetailsPara>
                  </VideoItemDetailsButton1>
                  <VideoItemDetailsButton1
                    type="button"
                    isLike={savedClicked}
                    onClick={saveChanges}
                  >
                    <RiMenuAddFill />
                    <VideoItemDetailsPara>{saveText}</VideoItemDetailsPara>
                  </VideoItemDetailsButton1>
                </VideoItemDetailsLikeContainer>
              </VideoItemDetailsLikeAndDislikeContainer>
              <VideoItemDetailsHorizental />
              <VideoItemDetailsConst>
                <VideoItemDetailsChannelLogo
                  src={profileImageUrl}
                  alt="channel logo"
                />

                <VideoItemDetailsDescriptionChanel>
                  <VideoItemDetailsDescriptionPara isDark={isDarkActive}>
                    {name}
                  </VideoItemDetailsDescriptionPara>
                  <VideoItemDetailsDescriptionPara2>
                    {subscriberCount} subscribers
                  </VideoItemDetailsDescriptionPara2>
                  <VideoItemDetailsDescriptionPara2>
                    {description}
                  </VideoItemDetailsDescriptionPara2>
                </VideoItemDetailsDescriptionChanel>
              </VideoItemDetailsConst>
            </VideoItemDetailsSubContainer>
          </>
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

  renderVideoItemDetailsOnStatus = () => {
    const {progressStatus} = this.state
    switch (progressStatus) {
      case initialProgress.progress:
        return this.renderLoaderView()
      case initialProgress.success:
        return this.renderVideoItemDetails()
      case initialProgress.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {videoDetailsList} = this.state
    return (
      <NextWatchContext.Consumer>
        {value => {
          const {isDarkActive} = value
          return (
            <>
              <Header />
              <VideoItemDetailsMainContainer>
                <HomeMenuItems />
                {this.renderVideoItemDetailsOnStatus()}
              </VideoItemDetailsMainContainer>
            </>
          )
        }}
      </NextWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
