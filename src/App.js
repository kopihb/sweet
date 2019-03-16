import React, { Component } from 'react';
import './App.scss';

import SweetItem from './components/Sweet-item/SweetItem';
import Slider from './components/Slider/Slider';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Question from './components/Questions/Question';
import Nav from './components/Nav/Nav';

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

          <div className="nav-block">
              <Nav />
          </div>
          <Slider />
          <div className="about" id="about">
              <div className="about-us">
                  <About />
              </div>
              <div className="contacts-info">
                  <Contact />
              </div>
          </div>

          <div className="sweet-block" id="sweet">
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
          <div className="questions" id="questions">
               <Question />
          </div>
          <div className="contacts" id="contacts">
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
