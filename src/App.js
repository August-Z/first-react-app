import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome'
import Clock from './components/clock/clock'
import Toggle from './components/toggle/toggle'
import ToggleX from './components/toggle/toggle-x'

class App extends Component {
  render() {
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
      </div>
    );
  }
}

export default App;
