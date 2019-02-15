import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import SweetItem from './components/Sweet-item/SweetItem';
import { sweetsdata } from './data/Data.js';

class App extends Component {

    state ={
        sweets : sweetsdata["sweets "]
    }

  render() {
        /*for check  data*/
      console.log(sweetsdata);
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="sweet-block">
              {this.state.sweets.map((sweet, index) => {
                return  <SweetItem
                    name={sweet.name}
                    key={index}
                />
              })};

          </div>
        </header>
      </div>
    );
  }
}

export default App;
