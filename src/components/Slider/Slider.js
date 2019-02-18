import React from 'react';
import { Slide } from 'react-slideshow-image';

import './Slider.scss';

const slideImages = [
    'http://www.sweetstudio.com.ua/wp-content/uploads/2018/03/s2-2-e1523558182454.jpg',
    'http://www.sweetstudio.com.ua/wp-content/uploads/2018/03/s3-2-e1523558253474.jpg',
    'http://www.sweetstudio.com.ua/wp-content/uploads/2018/03/s1-3.jpg'
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
};

const Slider = () => {
    return (
        <Slide {...properties}>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    {/*<span>Slide 1</span>*/}
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                    {/*<span>Slide 2</span>*/}
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                    {/*<span>Slide 3</span>*/}
                </div>
            </div>
        </Slide>
    )
};

export  default Slider
