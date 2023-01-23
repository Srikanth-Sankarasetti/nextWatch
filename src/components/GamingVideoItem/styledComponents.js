import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingVideoList = styled.li`
  margin-top: 30px;
`

export const GamingVideoImages = styled.img`
  width: 350px;
`
export const GamingVideoPara = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const GamingVideoPara1 = styled.p`
  color: #909090;
`
export const GamingVideoLink = styled(Link)`
  text-decoration: none;
`
