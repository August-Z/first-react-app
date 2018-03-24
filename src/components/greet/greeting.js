import React from 'react'
import UserGreeting from './user-greeting'
import GuestGreeting from './guest-greeting'

class Greeting extends React.Component {
  render() {
    return (
      this.props.isLoggedIn ?
        <UserGreeting/> :
        <GuestGreeting/>
    )
  }
}

export default Greeting