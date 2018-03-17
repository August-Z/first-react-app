import React from 'react'

class welcome extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name}</h1>)
  }
}

export default welcome