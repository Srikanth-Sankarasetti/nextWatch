import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingVideoListContainer = styled.li`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`

export const TrendingVideoListImage = styled.img`
  width: 400px;
`
export const TrendingVideoListDetailsContainer = styled.div``

export const TrendingVideoListPara = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-weight: bold;
`

export const TrendingVideoViewContainer = styled.div`
  display: flex;
  gap: 15px;
`
export const TrendingVideoListParaCount = styled.p`
  color: #606060;
  font-weight: bold;
`

export const TrendingLinks = styled(Link)`
  text-decoration: none;
`
