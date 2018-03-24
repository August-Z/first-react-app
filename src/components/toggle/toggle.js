import React from 'react'

export default class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { flag: true }
    this.bgColor = { backgroundColor: this.props.bgColor }
    // 绑定在组件上的事件函数，如果需要使用 class 的 this 指针，需要手动绑定
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // setState 的2个参数分别为之前的 state 与组件的 props
    this.setState((preState, props) => ({
      flag: !preState.flag
    }))
  }

  render() {
    return (
      <button onClick={ this.handleClick } style={ this.bgColor }>
        { 'this button state is' } { this.state.flag ? 'on' : 'off' }
      </button>
    )
  }
}
