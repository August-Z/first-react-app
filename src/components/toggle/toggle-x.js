import React from 'react'

export default class ToggleX extends React.Component {
  constructor(props) {
    super(props)
    this.state = { flag: true }
    this.bgColor = { backgroundColor: this.props.bgColor }
  }

  handleClick = () => {
    console.log(this)
  }

  render() {
    return (
      <button onClick={ this.handleClick } style={ this.bgColor }>
        { 'this button click has this' }
      </button>
    )
  }


}