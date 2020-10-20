import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Media from 'react-media';
import Card from './Card';
import bobs from '../assets/images/bobs.jpg';
import yale from '../assets/images/yale.jpg';
import partners from '../assets/images/partners.jpg';
import buggy from '../assets/images/buggy.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Gallery extends React.Component {
    state = {
        items: [
            {
                id: 0,
                title: 'Bob\'s Premium Rewards Program',
                subTitle: 'A Bob\'s Store membership program loaded with exclusive benefits and rewards built under Clarus Commerce.',
                imgSrc: bobs,
                link: 'https://www.bestofbobspremium.com/',
                selected: false
            },
            {
                id: 1,
                title: 'Responsive UI keeps the world turning',
                subTitle: 'Satisfying many users of the Yale MFA-DUO, CAS-SSO and NetID Management Applications.',
                imgSrc: yale,
                link: 'https://veritas.its.yale.edu/netid/',
                selected: false
            },
            {
                id: 2,
                title: 'A website should be bold and proud',
                subTitle: 'Partners Bar and Nightclub is a long-lasting staple in New Haven nightlife and the LGBTQ Community.',
                imgSrc: partners,
                link: 'https://www.partnersnewhaven.com',
                selected: false
            },
            {
                id: 3,
                title: 'Fresh shine, fresh pup, fresh site to go',
                subTitle: 'Buggy Car Wash and Barking Bath is the all-in-one spot for your car and dog maintenance.',
                imgSrc: buggy,
                link: 'https://buggycarwash.com',
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
                    <Media queries={{
                        small: "(max-width: 767px)",
                        medium: "(min-width: 768px) and (max-width: 1899px)",
                        large: "(min-width: 1900px)"
                    }}>
                        {matches => (
                            <div>
                                {matches.small && <Carousel>
                                    {this.makeItems(this.state.items)}
                                </Carousel>}
                                {matches.medium && <Carousel centerMode
                                    centerSlidePercentage={33.33}>
                                    {this.makeItems(this.state.items)}
                                </Carousel>}
                                {matches.large && <div>{this.makeItems(this.state.items)}</div>}
                            </div>
                        )}
                    </Media>
                </Row>
            </Container>
        );
    }
}

export default Gallery;
