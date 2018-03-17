import React, {Component} from 'react'

export default class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="avatar"
               src={this.props.author.avatarUrl}
               alt={this.props.author.name}
          />
          <div className="UserInfo-name">
            {this.props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {this.props.text}
        </div>
        <div className="Comment-date">
          {formatDate(this.props.date)}
        </div>
      </div>
    )
  }
}