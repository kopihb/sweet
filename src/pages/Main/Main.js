import React, { Component } from 'react';

import './Main.scss';
import { Route, withRouter } from 'react-router-dom';

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

//import axios from 'axios';

class Main extends Component {

    state ={
        sweets : sweetsdata["sweets "],
        sweetItemSelected: null,
        posts:  []
    };

    componentDidMount () {
        console.log('main page');
        console.log(this.props);
        // axios.get('/posts')
        //     .then(response => {
        //       const posts = response.data.slice(0, 2)
        //       const updatedPosts = posts.map(post => {
        //          return {
        //              ...post,
        //              price: 777
        //          }
        //       })
        //       this.setState({posts: updatedPosts});
        //        // console.log(this.state.posts)
        //     })
        // .catch( error => {
        //     console.log(error)
        // })

    }

    itemSelectedHandler = (id) => {
        console.log(id);
      //  console.log('main state' +this.state)
      //  console.log('main props' +this.props)
         this.setState({ sweetItemSelected: id });
         console.log(this.state);
       // console.log('main props' +this.props)
        this.props.history.push( '/items/' + id );
    }

  render() {
      console.log(this.state)
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
             {/*// <Item id={this.state.sweetItemSelected} />*/}
          </div>
          {/*<Route path="/:id" exact component={Item} />*/}
          {/*<Route path={this.state.match.url + '/:id'}  />*/}
          <Route path={this.props.match.url + '/:id'}  component={Item}  />
      </div>
    );
  }
}

export default withRouter(Main);
