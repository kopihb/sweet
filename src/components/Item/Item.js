import React, { Component } from "react";

import './Item.scss';
import TextClamp from "react-text-clamp";

class Item extends Component {
    render () {

        let item = <div> No item selected </div>

        if (this.props.id) {
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