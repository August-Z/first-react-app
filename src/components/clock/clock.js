import React from 'react'

/**
 *  -- Clock 组件是如何实时显示当前时间的 ？ --
 *
 * 1. 当 <Clock /> 被传递给 ReactDom.render() 时，React 调用 Clock 组件的构造函数。
 * 由于 Clock 需要显示当前时间，所以使用包含当前时间的对象来初始化 this.state。然后会更新此'状态'。
 *
 * 2. 然后 React 会调用 Clock 组件的 render() 方法。这时 React 已了解屏幕上应该显示什么内容，
 * 然后 React 更新 DOM 以匹配 Clock 的渲染输出。
 *
 * 3. 当 Clock 的输出插入到 DOM 中时，React 调用 componentDidMount() 生命周期钩子。在其中，
 * Clock 组件要求浏览器设置一个定时器，每 1000 毫秒调用一次 tick()。
 *
 * 4. 浏览器每秒钟调用 tick() 方法。在其中，Clock 组件通过使用包含当前时间的对象调用 setState() 中
 * 调度 UI 更新。通过调用 setState()，React 知道状态已经改变，并再次调用 render() 方法来确定屏幕
 * 上应当显示什么。这一次 render() 方法中的 this.state.date 将不同，所以渲染输出将包含更新的时间，
 * 并相应地更新 DOM 。
 *
 * 5. 一旦 Clock 组件被从 DOM 中移除，React 会调用 componentWillUnmount() 这个钩子函数，定时器也
 * 就会被清除。
 */
export default class Clock extends React.Component {

  style = {
    padding: '0 20px',
    letterSpacing: '1px'
  }

  constructor (props) {
    super(props)
    // 构造函数是唯一能够初始化 this.state 的地方
    this.state = { date: new Date() }
  }

  tick () {
    // 直接进行 this.state.date = new Date() 是无效的
    this.setState({ date: new Date() })
  }

  // 挂载：组件第一次加载到 dom 中
  componentDidMount () {
    /**
     * 虽然 this.props 由 React 本身设置以及 this.state 具有特殊的含义，
     * 但如果需要存储不用于视觉输出的数据，则可以手动向类中添加其他字段。
     * 如果你不在 render() 中使用某些东西，它就不应该在状态中。
     * @type {number}
     */
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)
  }

  // 卸载：生成的 dom 被移除的时候
  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  render () {
    return (
      <div style={ this.style }>
        <h2>It's { this.state.date.toLocaleTimeString() }</h2>
        <h4>I'm learning react and trying to write this new site with it.</h4>
      </div>
    )
  }
}