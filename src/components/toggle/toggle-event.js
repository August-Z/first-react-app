import React from 'react'

export default class ToggleEvent extends React.Component {
  constructor(props) {
    super(props)
  }

  preventPop(name, e) {
    e.preventDefault()
    alert(name)
  }

  render() {
    return (
      <div>
        <p> { 'This is title' } </p>
        <a href="http://www.zoushicheng.com/"
           onClick={ this.preventPop.bind(this, this.props.name) }>Click</a>
      </div>
    )
  }

}