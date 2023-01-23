import styled from 'styled-components'

export const SavedVideosMainContainer = styled.div`
  display: flex;
`
export const SavedVideosNoVideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '')};
`

export const SavedNoVideosImage = styled.img`
  width: 500px;
`

export const SavedVideosHead = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  padding-top: 30px;
`

export const SavedVideosPara = styled.p`
  color: #606060;
`
