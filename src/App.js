import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import SweetItem from './components/Sweet-item/SweetItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div className="sweet-block">
              <SweetItem name="name 1" />
              <SweetItem name="name 2"/>
              <SweetItem name="name 3"/>
              <SweetItem name="name 4"/>
              <SweetItem name="name 5"/>
              <SweetItem name="name 6"/>
              <SweetItem name="name 7"/>
              <SweetItem name="name 8"/>
              <SweetItem name="name 9"/>
          </div>


        </header>
      </div>
    );
  }
}

export default App;
