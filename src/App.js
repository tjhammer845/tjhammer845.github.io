import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// fontawesome imports
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './App.css';

import logo from './assets/images/logo.png'; // Tell webpack this JS file uses this image
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {


    state = {
        title: 'Tom Hammer',
        siteTitle: 'TH | Front-End Engineer and Digital Designer',
        // icon1: '<FontAwesomeIcon className="p-0" icon={faPencilRuler} />',
        icon2: '<FontAwesomeIcon className="p-0" icon={faCode} />',
        // icon3: '<FontAwesomeIcon className="p-0" icon={faGrinWink} />',
        headerLinks: [
            { title: 'Home', path: '/react-portfolio-tjh' },
            { title: 'About', path: '/about' },
            { title: 'Contact', path: '/contact' }
        ],
        home: {
            title: 'Creative, logical, and slightly sarcastic.',
            subTitle: 'Web stuff with a brighter future in mind!',
            text: 'Check out some of my work below.'
        },
        about: {
            title: 'About Tom'
        },
        contact: {
            title: 'Let\'s Chat'
        }
    }
    componentDidMount() {
        document.title = this.state.siteTitle
    }
    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar className="border-bottom" bg="transparent" expand="lg">
                        <Navbar.Brand className="font-weight-bold">
                            <img className="main-logo" src={logo} alt="Logo" />
                            <h1 className="d-inline-block navbar-title">{this.state.title}
                                <span className="font-italic">{this.state.subtitle}</span></h1>
                        </Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link p-0 pl-md-4" to="/react-portfolio-tjh">Home</Link>
                                <Link className="nav-link p-0 pl-md-4" to="/about">About</Link>
                                <Link className="nav-link p-0" to="/contact">Let&rsquo;s Chat</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route path="/react-portfolio-tjh" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
                    <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
                </Container>
                <Footer />
            </Router >
        );
    }
}

export default App;
