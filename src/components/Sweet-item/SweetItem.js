import React from 'react';

import './SweetItem.css';

const sweetItem = (props) => {
    return (
        <div className="SweetItem">
            <div className="sweet-logo"><img src={props.url} alt={props.name} /> </div>
            <div className="sweet-name"> I am sweet {props.name}</div>
            <div className="sweet-description"> {props.description}</div>
            <div>Ціна: {props.price} грн/кг</div>
            <button>Детальніше</button>
        </div>
    )
};

export default sweetItem;