import React from "react";

import Card from "../components/Card";

import yaleUI from "../assets/images/yaleUI.png";
import partnersNewHaven from "../assets/images/partnersNewHaven.png";
import buggy from "../assets/images/buggy.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Responsive UI keeps the collegiate world turning",
                    subTitle: "Satisfying many users of the Yale MFA-DUO, CAS-SSO and NetID Management Applications.",
                    imgSrc: yaleUI,
                    link: "https://veritas.its.yale.edu/netid/",
                    selected: false
                },
                {
                    id: 1,
                    title: "Websites should be bold and proud",
                    subTitle: "Partners Bar and Nightclub is a long-lasting staple in New Haven nightlife and the LGBTQ Community.",
                    imgSrc: partnersNewHaven,
                    link: "https://www.partnersnewhaven.com",
                    selected: false
                },
                {
                    id: 2,
                    title: "Fresh shine, fresh pup, fresh website to go",
                    subTitle: "Buggy Car Wash and Barking Bath is the all-in-one spot for your car and dog maintenance.",
                    imgSrc: buggy,
                    link: "https://buggycarwash.com",
                    selected: false
                }
            ]
        };
    }

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
                <Row className="justify-content-around text-center">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;
