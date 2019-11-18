import React, { Component, useState } from 'react';
import './App.scss';

import SweetItem from './components/Sweet-item/SweetItem';
import Slider from './components/Slider/Slider';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Question from './components/Questions/Question';
import Nav from './components/Nav/Nav';
import Item from './components/Item/Item'
import CreateItem from './components/CreateItem/CreateItem';

import { sweetsdata } from './data/Data.js';

import axios from 'axios';

class App extends Component {

    state ={
        sweets : sweetsdata["sweets "],
        sweetItemSelected: null,
        posts:  []
    };

    componentDidMount () {
        axios.get('/posts')
            .then(response => {
              const posts = response.data.slice(0, 2)
              const updatedPosts = posts.map(post => {
                 return {
                     ...post,
                     price: 777
                 }
              })
              this.setState({posts: updatedPosts});
               // console.log(this.state.posts)
            })
        .catch( error => {
            console.log(error)
        })

    }

    itemSelectedHandler = (id) => {
        console.log(id);
        this.setState({ sweetItemSelected: id })
    }

  render() {

      const posts = this.state.posts.map(post => {
            return <SweetItem
                name={post.title}
                // url={sweet.url}
                // description={sweet.description}
                price={post.price}
                key={post.id}
                clicked={()=> this.itemSelectedHandler(post.id)}
            />
          });
      const sweets = this.state.sweets.map((sweet, index) => {
          return <SweetItem
              name={sweet.name}
              url={sweet.url}
              description={sweet.description}
              price={sweet.price}
              key={index}
              clicked={()=> this.itemSelectedHandler(sweet.id)}
          />
      });

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
              {sweets}
          </div>

          {/*<div className="questions" id="questions">*/}
               {/*<Question />*/}
          {/*</div>*/}
          {/*<div className="contacts" id="contacts">*/}
             {/*<div className="contacts-infos">*/}
              {/*<Contact />*/}
          {/*</div>*/}
             {/*<div className="map">*/}
                 {/*карта гугла*/}
             {/*</div>*/}
          {/*</div>*/}


          <div className="sweet-block" id="sweet">
              {posts}
          </div>

          <div >
            <CreateItem />
          </div>
          <div>
              <Item id={this.state.sweetItemSelected} />
          </div>
      </div>
    );
  }
}

export default App;
