import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
`

export const HomeSubContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`

export const HomePrimeBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 40vh;
  display: ${props => (props.bannerClosed ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
  gap: 15px;
  flex-shrink: 0;
`
export const HomePrimeBannerCloseButton = styled.button`
  margin-left: 90%;
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
`

export const HomePrimaBannerLogo = styled.img`
  width: 15%;
`

export const HomePrimaBannerPara = styled.p``
export const HomePrimaBannerGetButton = styled.button`
  background-color: transparent;
  border: 2px solid #181818;
  color: #181818;
  height: 40px;
  width: 13%;
  cursor: pointer;
`

export const HomeVideoContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '')};
  min-height: 100vh;
`

export const HomeSearchInput = styled.input`
  border-style: none;
  outline: none;
  width: 85%;
  height: 35px;
  padding-left: 10px;
  color: ${props => (props.isDark ? '#f4f4f4' : '#231f20')};
  background-color: ${props => (props.isDark ? 'transparent' : '')};
`
export const HomeSearchContainer = styled.div`
  border: 2px solid #616e7c;
  width: 38%;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 30px;
`
export const SearchIconButton = styled.button`
  width: 15%;
  background-color: #94a3b8;
  opacity: 0.7;
  border-style: none;
  outline: none;
  cursor: pointer;
  height: 36px;
`

export const HomeVideoOrederList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#000000' : '')};
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 40px;
  background-color: ${props => (props.isDark ? '#000000' : '')};
`

export const NoViewContainer = styled.div`
  display: ${props => (props.viewStatus ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const FailureViewImage = styled.img`
  width: 35%;
`
export const FailureViewHead = styled.h1`
  font-size: 30px;
  padding-top: 30px;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
`
export const FailureViewPara = styled.p`
  color: #606060;
`

export const FailureViewButton = styled.button`
  border-style: none;
  background-color: #4f46e5;
  color: #ffffff;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  width: 8%;
  height: 40px;
`
