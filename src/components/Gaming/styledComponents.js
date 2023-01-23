import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingMainCaontainer = styled.div`
  display: flex;
`
export const GamingVideosUlList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '')};
`
