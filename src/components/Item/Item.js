import React, { Component, Fragment } from "react";
//import {withRouter, Router, Route, Switch} from 'react-router-dom';

import './Item.scss';
import TextClamp from "react-text-clamp";
//import { sweetsdata } from './../../data/Data.js';
import axios from '../../axios-orders';
// import Main from "../../pages/Main/Main";
// import Admin from "../../pages/Admin/Admin";
import {Redirect} from "react-router-dom";

class Item extends Component {

    state = {
        loadedItem: '',
        deleted: false
    }




    componentDidMount () {
        // this.loadData();
        console.log('item did mount');
        console.log(this.state);
        console.log(this.props);
        //this.returningBack();

    }

    componentWillMount (){
        //this.returningBack();
        this.loadData();
    }




    renderRedirect = () => {
        if (this.state.deleted) {
            return <Redirect to='/items' />
        }
    }


    loadData () {
        if ( this.props.match.params.id ) {
            //if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
            console.log(' in  item  props.match.params.id');
            console.log(this.props.match.params.id);
                axios.get( '/items/' + this.props.match.params.id + '.json')
               // axios.get( '/items.json')
                    .then( res => {
                        const needItem = res.data;

                        // let transformData = Object.values(response.data);
                        console.log('responce in axios item');
                        console.log(needItem);
                        // let needItem = transformData.find(need => need.id === this.props.match.params.id);
                        this.setState( { loadedItem: needItem } );


                    } )
                    .catch( error => {
                        console.log(error)
                    });

        }
    }

    deleteItemHandler = (id) => {
        axios.delete('/items/' + id +'.json')
            .then(response => {
                console.log(response);
                // if(response) {
                //     this.returningBack();
                // }

                this.setState( { deleted: true } );
                console.log("ater delete")
                console.log(this.state)
            })
            .catch( error => {
                console.log(error)
            });
    }


    render () {

        let item = <div> No item selected </div>
        if (this.props) {
            item = <p> Loading ...</p>
        }



       // if (this.props.match.params.id) {
           // let needItem = this.state.sweets.find(need => need.id === +this.props.match.params.id);

            item = (
                <div className="SweetItem">
                    <div className="sweet-logo">
                        <img src={this.state.loadedItem.url} alt={this.state.loadedItem.name}/>
                    </div>
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
                    <div className="sweet-delete" onClick={() => this.deleteItemHandler(this.props.match.params.id)}>Delete</div>


                </div>
            );
       // }



        //return (<Fragment>{item}</Fragment>)
       // return  <div> {item}</div>
        return  (



            <div className="SweetItem">
                {this.renderRedirect()}
                <div className="sweet-logo">
                    <img src={this.state.loadedItem.url} alt={this.state.loadedItem.name}/>
                </div>
                <div className="sweet-name">
                    <h3><i>"{this.state.loadedItem.title}"</i></h3>
                </div>
                <div className="sweet-description">
                    {/*<TextClamp fontSize={16} maxLines={3} rgbBgColor={'rgb(255,255,255)'} className="line-clamp">*/}
                        {this.state.loadedItem.content}
                    {/*</TextClamp>*/}
                </div>

                <div className="sweet-price">
                    <i>Ціна: </i>
                    {this.state.loadedItem.price} грн/кг
                </div>
                <div className="sweet-delete" onClick={() => this.deleteItemHandler(this.props.match.params.id)}>Delete</div>


            </div>
        )
    }
}


export default Item;
//export default withRouter(Item);



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
