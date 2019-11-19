import React, { Component, useState } from 'react';

import './Main.scss';
import { Link, Route } from 'react-router-dom';

import SweetItem from './../../components/Sweet-item/SweetItem';
import Item from './../../components/Item/Item'
// import Slider from './../../components/Slider/Slider';
// import Contact from './../../components/Contact/Contact';
// import About from './../../components/About/About';
// import Admin  from '../Admin/Admin';
//
// import Question from './../../components/Questions/Question';
// import Nav from './../../components/Nav/Nav';
//
// import CreateItem from './../../components/CreateItem/CreateItem';

import { sweetsdata } from './../../data/Data.js';

import axios from 'axios';

class Main extends Component {

    state ={
        sweets : sweetsdata["sweets "],
        sweetItemSelected: null,
        posts:  []
    };

    // componentDidMount () {
    //     console.log('my main' + this.props)
    //     axios.get('/posts')
    //         .then(response => {
    //           const posts = response.data.slice(0, 2)
    //           const updatedPosts = posts.map(post => {
    //              return {
    //                  ...post,
    //                  price: 777
    //              }
    //           })
    //           this.setState({posts: updatedPosts});
    //            // console.log(this.state.posts)
    //         })
    //     .catch( error => {
    //         console.log(error)
    //     })
    //
    // }

    itemSelectedHandler = (id) => {
        console.log(id);
      //  console.log('main state' +this.state)
      //  console.log('main props' +this.props)
        this.setState({ sweetItemSelected: id })
        //console.log('main state' +this.state)
       // console.log('main props' +this.props)
        //this.props.history.push( '/' + id );
    }

  render() {

      const sweets = this.state.sweets.map((sweet) => {
          return (
              <SweetItem
              name={sweet.name}
              url={sweet.url}
              description={sweet.description}
              price={sweet.price}
              key={sweet.id}
              clicked={()=> this.itemSelectedHandler(sweet.id)}
          />)

      });

    return (

      <div className="Main">



          <div className="sweet-block" id="sweet">
              {sweets}
          </div>

          <div>
              {/*<Item id={this.state.sweetItemSelected} />*/}
          </div>
          <Route path="/:id" exact component={Item} />
         {/*// <Route path={this.state.match.url + '/:id'} exact component={Item} />*/}
      </div>
    );
  }
}

export default Main;
