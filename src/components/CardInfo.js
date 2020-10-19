import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {
    const style = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <animated.div className="g-card-info d-flex flex-wrap align-content-center justify-content-center p-3" style={style}>
            <p className="g-card-title text-white">{props.title}</p>
            <p className="g-card-sub-title text-white">{props.subTitle}</p>
            <a href={props.link} target="_blank" className="btn btn-primary" rel="noopener noreferrer">View Website</a>
        </animated.div>
    );
}

export default CardInfo;