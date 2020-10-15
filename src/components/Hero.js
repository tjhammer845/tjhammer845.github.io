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
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12} className="text-center">
                        {props.title && <h2 className="display-1 font-weight-bolder">{props.title}</h2>}
                        <FontAwesomeIcon className="p-0" icon={faPencilRuler} />
                        <FontAwesomeIcon className="p-0" icon={faCode} />
                        <FontAwesomeIcon className="p-0" icon={faGrinWink} />
                        {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>}
                        {props.text && <h4 className="lead font-weight-light">{props.text}</h4>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}


export default Hero;