import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeVideosList = styled.li`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 400px;
`

export const HomeVideoImage = styled.img`
  width: 400px;
`

export const Links = styled(Link)`
  text-decoration: none;
`

export const HomeVideoChanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-top: 10px;
`

export const HomeVideoChannelImage = styled.img`
  width: 15%;
  height: 50px;
`
export const HomeVideoChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const HomeVideoChannelTitle = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
`

export const HomeVideoChannelPara = styled.p`
  color: ${props => (props.isDark ? '#cccccc' : '#606060')};
`
export const HomeVideoChanelViewsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
