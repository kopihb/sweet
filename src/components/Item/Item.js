import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import './Item.scss';
import TextClamp from "react-text-clamp";
import { sweetsdata } from './../../data/Data.js';
import axios from '../../axios-orders';

class Item extends Component {

    state = {
        loadedItem: '',
    }

    //
    // componentDidMount () {
    //   this.loadData();
    //     //this.setState({sweets: sweetsdata["sweets"]});
    //     //console.log (this.state.sweets)
    // };
    //
    // componentDidUpdate() {
    //    this.loadData();
    //    //  this.setState({sweets: sweetsdata["sweets"]});
    //    //  console.log (this.state.sweets)
    // }
    //
    //
    //
    //
    // loadData(){
    //     if (this.props.match.params.id) {
    //         console.log(this.props.match.params)
    //         console.log (this.state.sweets)
    //         let needItem = this.state.sweets.find(need => need.id === +this.props.match.params.id);
    //         //this.setState({loadedItem: needItem});
    //         console.log('loadedItem is');
    //         console.log(needItem);
    //
    //         // console.log(' if (this.props.id)');
    //     }
    // };



// NEED  for  sever data
    //
    componentDidMount () {
        this.loadData();
        console.log('item did mount');
        console.log(this.state);
    }

    componentDidUpdate() {
        this.loadData();
        console.log('item did update');
        console.log(this.state);
    }

    loadData () {
        if ( this.props.match.params.id ) {
            //if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {

                axios.get( '/items.json' + this.props.match.params.id )
                    .then( response => {
                        console.log('responce in axios');
                        console.log(response.data);
                        this.setState( { loadedItem: response.data } );
                    } );

        }
    }
    //
    // deletePostHandler = () => {
    //     axios.delete('/posts/' + this.props.match.params.id)
    //         .then(response => {
    //             console.log(response);
    //         });
    // }
    //


    render () {

        let item = <div> No item selected </div>
        if (this.props) {
            item = <p> Loading ...</p>
        }


        if (this.props.match.params.id) {
           // let needItem = this.state.sweets.find(need => need.id === +this.props.match.params.id);

            item = (
                <div className="SweetItem">
                    {/*<div className="sweet-logo">*/}
                        {/*<img src={this.state.loadedItem.url} alt={this.state.loadedItem.name}/>*/}
                    {/*</div>*/}
                    <div className="sweet-name">
                        <h3><i>"{this.state.loadedItem.title}"</i></h3>
                    </div>
                    <div className="sweet-description">
                        <TextClamp fontSize={16} maxLines={3} rgbBgColor={'rgb(255,255,255)'} className="line-clamp">
                            {this.state.loadedItem.content}
                        </TextClamp>
                    </div>

                    <div className="sweet-price">
                        <i>Ціна: </i>
                        {this.state.loadedItem.price} грн/кг
                    </div>
                    <div >
                        {/*<i> ID: </i>*/}
                        {/*{needItem.id} грн/кг*/}
                        {/*{this.needItem.id} грн/кг*/}
                    </div>
                    <div className="sweet-delete" onClick={() => this.onDeleteItemHandler(this.state.loadedItem.id)}>Delete</div>
                </div>
            );
        }



        return item
    }
}


//export default Item;
export default withRouter(Item);