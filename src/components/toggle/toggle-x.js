import React from 'react'
import { bgColor } from './toggle-theme'

export default class ToggleX extends React.Component {
  constructor(props) {
    super(props)
    this.state = { flag: true }
  }

  handleClick = () => {
    console.log(this)
  }

  render() {
    return (
      <button onClick={ this.handleClick } style={ bgColor(this.props.bgColor) }>
        { 'this button click has this' }
      </button>
    )
  }
}