import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ExternalLink } from 'react-external-link';

// fontawesome imports
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {

    return (
        <footer className="mt-5 fixed-bottom bg-red">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        <ExternalLink target="_blank" to="https://github.com/tjhammer845/"><FontAwesomeIcon className="display-4 text-white pr-2" icon={faGithubAlt} /></ExternalLink>
                        <ExternalLink target="_blank" to="https://www.linkedin.com/in/thomasjhammer/"><FontAwesomeIcon className="display-4 text-white pr-2" icon={faLinkedinIn} /></ExternalLink>
                        <ExternalLink target="_blank" to="https://twitter.com/tjhammer845"><FontAwesomeIcon className="display-4 text-white" icon={faTwitter} /></ExternalLink>
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