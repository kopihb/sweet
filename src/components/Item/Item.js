import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import './Item.scss';
import TextClamp from "react-text-clamp";

class Item extends Component {

    state = {
        loadedItem: null,
        sweetItemSelected: null
    }

   componentDidMount () {
            console.log('my item');
            console.log(this.props);
       console.log('my item get props');
           if (this.props.id) {
               if (!this.state.loadedItem ||  (this.state.loadedItem && this.state.loadedItem.id) !== this.props.id) {
                   axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                       .then(response => {
                           console.log(response);
                           this.setState({
                               loadedItem: response.data
                           })
                       })
               }

              // console.log(' if (this.props.id)');
           }

      // this.loadData();
   };

    // componentDidUpdate () {
    //     this.loadData();
    // }
    //
    //
    // onDeleteItemHandler = (id) => {
    //     axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
    //         .then(response => {
    //             console.log('видаляємо item  id - ' + id);
    //             console.log(response);
    //         })
    //
    // }
    //
    // loadData () {
    //     if ( this.props.match.params.id ) {
    //         if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
    //             axios.get( '/posts/' + this.props.match.params.id )
    //                 .then( response => {
    //                     // console.log(response);
    //                     this.setState( { loadedPost: response.data } );
    //                 } );
    //         }
    //     }
    // }

    render () {
       console.log('props in item')
       console.log(this.props)
        let item = <div> No item selected </div>
        if (this.props) {
            item = <p> Loading ...</p>
        }
        if (this.state.loadedItem) {
            item = (
                <div className="SweetItem">
                    <div className="sweet-logo">
                        {/*<img src={props.url} alt={props.name}/>*/}
                    </div>
                    <div className="sweet-name">
                        {/*<h3><i>"{props.name}"</i></h3>*/}
                    </div>
                    <div className="sweet-description">
                        <TextClamp fontSize={16} maxLines={3} rgbBgColor={'rgb(255,255,255)'} className="line-clamp">
                            {/*{props.description}*/}
                        </TextClamp>
                    </div>

                    {/*<div className="sweet-price">*/}
                        {/*<i>Ціна: </i>*/}
                        {/*/!*{props.price} грн/кг*!/*/}
                    {/*</div>*/}
                    <div className="sweet-price">
                        <i>ID: </i>
                        {this.props.id} грн/кг
                    </div>
                    <div className="sweet-delete" onClick={() => this.onDeleteItemHandler(this.props.id)}>Delete</div>
                </div>
            );
        }



        return item
    }
}


//export default Item;
export default withRouter(Item);