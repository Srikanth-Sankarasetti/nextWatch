import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  display: flex;
`

export const NotFoundSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  background-color: ${props => (props.isDark ? '#000000' : '')};
`

export const NotFoundImage = styled.img`
  width: 500px;
`
export const NotFoundHead = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '')};
`

export const NotFoundPara = styled.p`
  color: #606060;
`
