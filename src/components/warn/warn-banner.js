import React from 'react'

class WarnBanner extends React.Component {
  render () {
    if (!this.props.warn) {
      return null
    } else {
      return (
        <div className='warning' style={ style }>
          Warning!
        </div>
      )
    }
  }
}

const style = {
  fontSize: '12px',
  color: '#000',
  textAlign: 'center'
}

export default WarnBanner