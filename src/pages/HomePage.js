import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';

function HomePage(props) {

    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Gallery />
        </div>
    );

}

export default HomePage;