import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.darkValue ? '#181818' : '#1e293b')};
`

export const LoginContainer = styled.div`
  background-color: ${props => (props.darkValue ? ' #000000' : '#ffffff')};
  width: 35%;
  min-height: 40vh;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  padding-top: 30px;
  box-shadow: 10px 5px 4px 20px
    ${props => (props.darkValue ? ' #000000' : '#ffffff')};
  @media screen and (max-width: 767px) {
    width: 70%;
  }
`

export const LoginLogoImage = styled.img`
  width: 45%;
`

export const LoginForm = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
  color: #64748b;
`

export const InputContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
  color: #64748b;
  margin-top: 20px;
`
export const InputLabel = styled.label`
  color: ${props => (props.darkValue ? '#f9f9f9' : '#475569')};
`

export const InputType = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  background-color: ${props => (props.darkValue ? 'transparent' : '')};
  border: 1px solid ${props => (props.darkValue ? '#1e293b' : '')};
  color: ${props => (props.darkValue ? '#f8fafc' : '')};
`
export const CheckboxContainer = styled.div`
  margin-top: 10px;
`
export const CheckBoxLabel = styled.label`
  padding-left: 6px;
  color: ${props => (props.darkValue ? '#f9f9f9' : '#0f0f0f')};
`

export const CheckBoxType = styled.input``

export const LoginCustomButton = styled.button`
  margin-top: 20px;
  background-color: #3b82f6;
  color: #ffffff;
  border-style: none;
  outline: none;
  cursor: pointer;
  height: 40px;
  border-radius: 10px;
  :hover {
    background-color: green;
  }
`

export const LoginErrorPara = styled.p`
  color: #ff0000;
  font-size: 12px;
  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`
