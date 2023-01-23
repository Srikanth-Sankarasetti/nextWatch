import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  display: flex;
`

export const TrendingSubContainer = styled.div`
  width: 88%;
  display: flex;
  flex-direction: column;
`

export const TrendingNameHeadContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDark ? '#424242' : '#cccccc')};
  height: 20vh;
  display: flex;
  align-items: center;
  padding-left: 100px;
  gap: 10px;
`

export const TrendingHead = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '')};
`

export const TrendingPara = styled.h1`
  background-color: #d7dfe9;
  width: 5%;
  height: 60px;
  border-radius: 35px;
  text-align: center;
`
export const TrendingVideoContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '')};
`

export const TrendingVideoUl = styled.ul`
  list-style-type: none;
  padding-left: 100px;
`
