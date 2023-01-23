import React from 'react'

const NextWatchContext = React.createContext({
  isDarkActive: false,
  savedVideos: [],
  darkStatusChange: () => {},
  videosUpdate: () => {},
})

export default NextWatchContext
