import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// fontawesome imports
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGrinWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero(props) {

    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center pt-5">
                    <Col md={10} sm={12} className="text-center">
                        {props.title && <h2 className="display-1 font-weight-bolder mt-5">{props.title}</h2>}
                        {props.subTitle && <h3 className="display-2 font-weight-light mt-4">{props.subTitle}</h3>}
                    </Col>
                </Row>
                <Row className="justify-content-center py-4">
                    <Col md={6} sm={12} className="text-center">
                        {props.text && <h4 className="lead font-weight-light">{props.text}</h4>}
                        <h2 className="display-4 mt-4">
                            <FontAwesomeIcon className="p-2 color-red" icon={faPencilRuler} />
                            <FontAwesomeIcon className="p-2 color-red" icon={faCode} />
                            <FontAwesomeIcon className="p-2 color-red" icon={faGrinWink} /></h2>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;