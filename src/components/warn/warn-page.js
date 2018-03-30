import React from "react";
import WarnBanner from './warn-banner'

class WarnPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { showWarning: true }
  }

  handleToggleClick = () => {
    this.setState((pre) => ({
      showWarning: !pre.showWarning
    }))
  }

  render () {
    return (
      <div>
        <WarnBanner warn={ this.state.showWarning }/>
        <button onClick={ this.handleToggleClick }>
          { this.state.showWarning ? 'Hide' : 'Show' }
        </button>
      </div>
    )
  }
}

export default WarnPage