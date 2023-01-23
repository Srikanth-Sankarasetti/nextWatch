import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginMainContainer,
  LoginContainer,
  LoginLogoImage,
  LoginForm,
  InputContainer,
  InputContainer2,
  InputLabel,
  InputType,
  CheckBoxType,
  CheckBoxLabel,
  CheckboxContainer,
  LoginCustomButton,
  LoginErrorPara,
} from './styledComponents'

import NextWatchContext from '../../context/NextWatchContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowPasswordActive: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSuccessSubmit = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({showSubmitError: true, errorMsg: error})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessSubmit(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  showPasswordChange = event => {
    this.setState({isShowPasswordActive: event.target.checked})
  }

  render() {
    return (
      <NextWatchContext.Consumer>
        {value => {
          const {isDarkActive} = value
          const {
            username,
            password,
            isShowPasswordActive,
            showSubmitError,
            errorMsg,
          } = this.state
          const loginWebsiteLogo = isDarkActive
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const passwordChecked = isShowPasswordActive ? 'text' : 'password'

          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <LoginMainContainer darkValue={isDarkActive}>
              <LoginContainer darkValue={isDarkActive}>
                <LoginLogoImage src={loginWebsiteLogo} alt="website logo" />
                <LoginForm onSubmit={this.submitForm}>
                  <InputContainer>
                    <InputLabel htmlFor="username" darkValue={isDarkActive}>
                      USERNAME
                    </InputLabel>
                    <InputType
                      type="text"
                      id="username"
                      placeholder="Username"
                      darkValue={isDarkActive}
                      value={username}
                      onChange={this.changeUsername}
                    />
                  </InputContainer>
                  <InputContainer2>
                    <InputLabel htmlFor="password" darkValue={isDarkActive}>
                      PASSWORD
                    </InputLabel>
                    <InputType
                      type={passwordChecked}
                      id="password"
                      placeholder="Password"
                      darkValue={isDarkActive}
                      value={password}
                      onChange={this.changePassword}
                    />
                  </InputContainer2>
                  <CheckboxContainer>
                    <CheckBoxType
                      type="checkbox"
                      id="checkbox"
                      onChange={this.showPasswordChange}
                    />
                    <CheckBoxLabel htmlFor="checkbox" darkValue={isDarkActive}>
                      Show Password
                    </CheckBoxLabel>
                  </CheckboxContainer>
                  <LoginCustomButton type="submit">Login</LoginCustomButton>
                  {showSubmitError && (
                    <LoginErrorPara>* {errorMsg}</LoginErrorPara>
                  )}
                </LoginForm>
              </LoginContainer>
            </LoginMainContainer>
          )
        }}
      </NextWatchContext.Consumer>
    )
  }
}

export default Login
