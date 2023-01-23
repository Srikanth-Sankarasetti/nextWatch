import styled from 'styled-components'

export const VideoItemDetailsMainContainer = styled.div`
  display: flex;
`

export const VideoItemDetailsSubContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-top: 20px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f1f1')};
`

export const VideoItemDetailsHead = styled.p`
  font-size: 25px;
  padding-top: 20px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const VideoItemDetailsLikeAndDislikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`

export const VideoItemDetailsViewsContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const VideoItemDetailsPara = styled.p`
  padding-top: 15px;
`

export const VideoItemDetailsLikeContainer = styled.div`
  display: flex;
  gap: 15px;
`

export const VideoItemDetailsButton1 = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isLike ? '#2563eb' : '#64748b')};
`

export const VideoItemDetailsConst = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: 90%;
  margin-bottom: 20px;
`

export const VideoItemDetailsHorizental = styled.hr`
  width: 90%;
  border: 2px solid;
`

export const VideoItemDetailsChannelLogo = styled.img`
  width: 4%;
`

export const VideoItemDetailsDescriptionChanel = styled.div``

export const VideoItemDetailsDescriptionPara = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const VideoItemDetailsDescriptionPara2 = styled.p`
  color: #606060;
`
