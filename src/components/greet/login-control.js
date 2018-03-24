import React from 'react'
import Greeting from './greeting'
import LoginButton from './login-button'
import LogoutButton from './logout-button'

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
  }

  handleLoginClick = () => {
    this.setState(() => ({ isLoggedIn: true }))
  }

  handleLogoutClick = () => {
    this.setState(() => ({ isLoggedIn: false }))
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    const button = isLoggedIn ?
      <LogoutButton onClick={ this.handleLogoutClick }/> :
      <LoginButton onClick={ this.handleLoginClick }/>

    return (
      <div>
        <Greeting isLoggedIn={ isLoggedIn }/>
        { button }
      </div>
    )
  }
}

export default LoginControl