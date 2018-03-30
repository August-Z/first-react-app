import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome'
import Clock from './components/clock/clock'
import Toggle from './components/toggle/toggle'
import ToggleX from './components/toggle/toggle-x'
import ToggleEvent from './components/toggle/toggle-event'
import LoginControl from './components/greet/login-control'
import WarnPage from './components/warn/warn-page'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome name={ 'August-Z' }/>
        <Clock/>
        <Toggle bgColor={ 'pink' }/>
        <ToggleX bgColor={ 'gray' }/>
        <ToggleEvent name={ 'Hello World!' }/>
        <LoginControl/>
        <WarnPage/>
      </div>
    );
  }
}

export default App;
