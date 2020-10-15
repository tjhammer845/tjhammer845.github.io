import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// fontawesome imports
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {

    return (
        <footer className="mt-5 fixed-bottom">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        <FontAwesomeIcon className="text-white p-0" icon={faGithub} />
                        <FontAwesomeIcon className="text-white p-0" icon={faLinkedin} />
                        <FontAwesomeIcon className="text-white p-0" icon={faTwitter} />
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3} sm={12}>
                        <font className="text-white">&copy; 2020 Tom Hammer. All Rights Reserved.</font>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;