import React from 'react';
import TextClamp from 'react-text-clamp';

import './SweetItem.css';

const sweetItem = (props) => {
    return (
        <div className="SweetItem">
            <div className="sweet-logo">
                <img src={props.url} alt={props.name}/>
            </div>
            <div className="sweet-name">
                <h3><i>"{props.name}"</i></h3>
            </div>
            <div className="sweet-description">
                <TextClamp fontSize={16} maxLines={3} rgbBgColor={'rgb(255,255,255)'} className="line-clamp">
                    {props.description}
                </TextClamp>
            </div>

            <div className="sweet-price">
                <i>Ціна: </i>
                {props.price} грн/кг
            </div>
            <button className="button-detail">Детальніше</button>
        </div>

    )
};

export default sweetItem;
