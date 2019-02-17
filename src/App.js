import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import SweetItem from './components/Sweet-item/SweetItem';
import Slider from './components/Slider/Slider';
import Contact from './components/Contact/Contact';
import { sweetsdata } from './data/Data.js';

class App extends Component {

    state ={
        sweets : sweetsdata["sweets "]
    };

  render() {
        /*for check  data*/
      console.log(sweetsdata);
    return (

      <div className="App">

          <div className="top-header">
              <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="nav">
             Меню
          </div>
          <div className="about">
              <div className="about-us">
                  Про нас
              </div>
              <div className="contacts-info">
                  <Contact />
              </div>
          </div>

          <Slider />

          <div className="sweet-block">
              {this.state.sweets.map((sweet, index) => {
                return  <SweetItem
                    name={sweet.name}
                    url={sweet.url}
                    description={sweet.description}
                    price={sweet.price}
                    key={index}
                />
              })}

          </div>
          <div className="questions">
                Блок запитань
          </div>
          <div className="contacts">
             <div className="contacts-info">
                 <Contact />
             </div>
             <div className="map">
                 карта гугла
             </div>
          </div>


      </div>
    );
  }
}

export default App;
