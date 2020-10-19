import React from 'react';
import CardInfo from '../components/CardInfo';
import Carousel from 'react-bootstrap/Carousel';

function Card(props) {
    return (
        <Carousel.Item className="g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
        </Carousel.Item>
        //         <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
        //     <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
        //     { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
        // </div>
    );
}

export default Card;