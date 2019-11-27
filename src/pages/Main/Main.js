import React, { Component, Fragment } from 'react';

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


    componentWillMount () {
        this.loadData();
    }





    loadData() {

            axios.get('/items.json')
                .then(res => {

                    // const sweetsList = Object.values(response.data);

                    const fetchedOrders = [];
                    for (let key in res.data) {
                        fetchedOrders.push({
                            ...res.data[key],
                            id: key
                        });
                    }
                    this.setState({ sweets: fetchedOrders});

                })
            .catch( error => {
                console.log(error)
            })
        // }

    }

    itemSelectedHandler = (id) => {
        console.log(id);
        this.props.history.push( '/items/' + id );
    }

  render() {
      const sweets = this.state.sweets.map((sweet) => {
          return (

              <SweetItem
              title={sweet.title}
              url={sweet.url}
              content={sweet.content}
              price={sweet.price}
              key={sweet.id}
              clicked={()=> this.itemSelectedHandler(sweet.id)}
          />)
      });

    return (


      <div className="Main">

          <div className="sweet-block" id="sweet">
                  {sweets}
              <Route path={this.props.match.url + '/:id'}   component={Item}  />
          </div>

      </div>
    );
  }
}

export default withRouter(Main);
