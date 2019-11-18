import React, { Component } from "react";
import axios from 'axios';

import './Item.scss';
import TextClamp from "react-text-clamp";

class Item extends Component {

    state = {
        loadedItem: null
    }

   componentDidUpdate () {

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
           }


   };

    onDeleteItemHandler = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                console.log('видаляємо item  id - ' + id);
                console.log(response);
            })

    }

    render () {

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

// const item = (props ) => {
//
//         return (
//             <div className="SweetItem">
//                 <div className="sweet-logo">
//                     <img src={props.url} alt={props.name}/>
//                 </div>
//                 <div className="sweet-name">
//                     <h3><i>"{props.name}"</i></h3>
//                 </div>
//                 <div className="sweet-description">
//                     <TextClamp fontSize={16} maxLines={3} rgbBgColor={'rgb(255,255,255)'} className="line-clamp">
//                         {props.description}
//                     </TextClamp>
//                 </div>
//
//                 <div className="sweet-price">
//                     <i>Ціна: </i>
//                     {props.price} грн/кг
//                 </div>
//
//             </div>
//         )
//
// }

export default Item;