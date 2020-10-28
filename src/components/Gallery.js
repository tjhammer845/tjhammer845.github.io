import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './Card';
import bobs from '../assets/images/cards/bobs.jpg';
import yale from '../assets/images/cards/yale.jpg';
import partners from '../assets/images/cards/partners.jpg';
import buggy from '../assets/images/cards/buggy.jpg';
import soon from '../assets/images/cards/soon.jpg';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

class Gallery extends React.Component {
    state = {
        items: [
            {
                id: 0,
                title: 'Fresh shine, fresh pup, fresh site to go',
                subTitle: 'Buggy Car Wash and Barking Bath is the all-in-one spot for your car and dog maintenance.',
                imgSrc: buggy,
                link: 'https://buggycarwash.com',
                selected: false
            },
            {
                id: 1,
                title: 'A website should be bold and proud',
                subTitle: 'Partners Bar and Nightclub is a long-lasting staple in New Haven nightlife and the LGBTQ Community.',
                imgSrc: partners,
                link: 'https://www.partnersnewhaven.com',
                selected: false
            },
            {
                id: 2,
                title: 'Responsive UI keeps the world turning',
                subTitle: 'Satisfying many users of the Yale MFA-DUO, CAS-SSO and NetID Management Applications.',
                imgSrc: yale,
                link: 'https://veritas.its.yale.edu/netid/',
                selected: false
            },
            {
                id: 3,
                title: 'Bob\'s Premium Rewards Program',
                subTitle: 'A Bob\'s Store membership program loaded with exclusive benefits and rewards built under Clarus Commerce.',
                imgSrc: bobs,
                link: 'https://www.bestofbobspremium.com/',
                selected: false
            },
            {
                id: 4,
                title: 'More coming soon!',
                subTitle: 'Please check back soon.',
                imgSrc: soon,
                link: null,
                selected: false
            }
        ]
    };

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    };

    makeItems = items => {
        return items.map(item => {
            return (
                <Card
                    item={item}
                    click={e => this.handleCardClick(item.id, e)}
                    key={item.id}
                />
            );
        });
    };

    render() {
        return (
            <Container fluid={true}>
                <Row className='justify-content-around text-center'>
                    <Carousel responsive={responsive}
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {this.makeItems(this.state.items)}
                    </Carousel>
                </Row>
            </Container>
        );
    }
}

export default Gallery;
