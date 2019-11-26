import React, { Component } from 'react';

import './Main.scss';
import { Route, withRouter, Link } from 'react-router-dom';

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

// import { sweetsdata } from './../../data/Data.js';
//
//import axios from 'axios';

import axios from '../../axios-orders';

class Main extends Component {
constructor(props) {
    super(props);
    this.loadData();
    // console.log('my state post')
    // console.log(this.state.post)
    // console.log('my state sweet')
     //console.log(this.state.sweets)
}
    state ={
        //sweets2 : sweetsdata["sweets "],
         sweets : [],
         sweetItemSelected: null,
        itemsLoaded: false,
        posts:  []
    };


    componentDidMount () {
        this.loadData();
        // console.log("response data DIDmount sweets2");
        // console.log(this.state.sweets);
        // console.log(this.state.sweets2);
    }

    componentDidUpdate() {
       // this.loadData();
       //  console.log("response data DIDUPDTE sweets2");
       //  console.log(this.state.sweets);
       //  console.log(this.state.sweets2);
    }

    loadData() {
        // if(this.state.itemsLoaded){
            axios.get('/items.json')
                .then(response => {

                    const sweetsList = Object.values(response.data);
                    this.setState({sweets: sweetsList});

                })
            .catch( error => {
                console.log(error)
            })
        // }

    }

    itemSelectedHandler = (id) => {
        console.log(id);
      //  console.log('main state' +this.state)
      //  console.log('main props' +this.props)
      //    this.setState({ sweetItemSelected: id });
      //    console.log(this.state);
       // console.log('main props' +this.props)
        this.props.history.push( '/items/' + id );
    }

  render() {
     // console.log(this.state)


      const sweets = this.state.sweets.map((sweet) => {
          return (

              <SweetItem
              name={sweet.title}
              //url={sweet.url}
              content={sweet.content}
              price={sweet.price}
              key={sweet.id}
              clicked={()=> this.itemSelectedHandler(sweet.id)}
          />)
      });

    return (


      <div className="Main">;

          <div className="sweet-block" id="sweet">
              {sweets}
          </div>

          <div>
             {/*// <Item id={this.state.sweetItemSelected} />*/}
          </div>
          <Route path={this.props.match.url + '/:id'}  component={Item}  />
      </div>
    );
  }
}

export default withRouter(Main);
