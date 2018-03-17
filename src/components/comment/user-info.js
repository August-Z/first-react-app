import React from 'react'
import Avatar from 'avatar'

export default class UserInfo extends React.Component {
  render() {
    return (
      <div className="user-info">
        <Avatar user={this.props.user}/>
        <div className="user-info-name">
          {this.props.user.name}
        </div>
      </div>
    )
  }
}