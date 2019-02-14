import React from 'react';

import './SweetItem.css';

const sweetItem = (props) => {
    return (
        <div className="SweetItem">
            <div className="sweet-logo">sweet-logo </div>
            <div className="sweet-name"> I am sweet {props.name}</div>
            <div className="sweet-description"> sweet-description sweet-description</div>
            <button>Detail</button>
        </div>
    )
};

export default sweetItem;