import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import NextWatchContext from './context/NextWatchContext'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'

// Replace your code here
class App extends Component {
  state = {
    isDarkActive: false,
    savedVideos: [],
  }

  darkStatusChange = () => {
    this.setState(prevState => ({
      isDarkActive: !prevState.isDarkActive,
    }))
  }

  videosUpdate = videoList => {
    const {savedVideos} = this.state
    const findVideo = savedVideos.find(
      eachCartItem => eachCartItem.id === videoList.id,
    )
    if (findVideo) {
      this.setState(prevState => ({
        savedVideos: prevState.savedVideos,
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoList],
      }))
    }
  }

  render() {
    const {isDarkActive, savedVideos} = this.state
    console.log(savedVideos)
    return (
      <>
        <NextWatchContext.Provider
          value={{
            isDarkActive,
            savedVideos,
            videosUpdate: this.videosUpdate,
            darkStatusChange: this.darkStatusChange,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute exact path="/not-found" component={NotFound} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Redirect to="/not-found" />
          </Switch>
        </NextWatchContext.Provider>
      </>
    )
  }
}

export default App
