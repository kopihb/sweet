import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SweetItem from './Sweet-item/SweetItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <SweetItem  name="name 1"/>
          <SweetItem name="name 2"/>
          <SweetItem name="name 3"/>

        </header>
      </div>
    );
  }
}

export default App;
