import React from 'react';
import CardInfo from '../components/CardInfo';
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6

function Card(props) {
    return (
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
                <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
            </div>
        </ReactCSSTransitionGroup>
    );
}

export default Card;