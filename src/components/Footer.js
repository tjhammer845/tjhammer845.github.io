import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ExternalLink } from 'react-external-link';
import { Link } from 'react-router-dom';

// fontawesome imports
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {

    return (
        <footer className="mt-5 fixed-bottom bg-red pl-3 pr-3 border-top">
            <Container fluid={true}>
                <Row className="justify-content-md-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        <ExternalLink target="_blank" className="pr-3" href="https://github.com/tjhammer845/"><FontAwesomeIcon className="display-4" icon={faGithubAlt} /></ExternalLink>
                        <ExternalLink target="_blank" className="pr-3" href="https://www.linkedin.com/in/thomasjhammer/"><FontAwesomeIcon className="display-4" icon={faLinkedinIn} /></ExternalLink>
                        <ExternalLink target="_blank" className="pr-3" href="https://twitter.com/tjhammer845"><FontAwesomeIcon className="display-4" icon={faTwitter} /></ExternalLink>
                        <Link target="_blank" className="p-0" to="./pdf/TH-CV.pdf"><FontAwesomeIcon className="display-4" icon={faFileDownload} /></Link>
                    </Col>
                    <Col className="p-0 d-flex justify-content-center justify-content-md-end" md={3} sm={12}>
                        <font className="text-white">&copy; 2020 Tom Hammer. All Rights Reserved.</font>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;