import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkflowPage from './pages/WorkflowPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {
    state = {
        title: 'Tom Hammer',
        siteTitle: 'TH | Front-End Engineer and Digital Creator',
        headerLinks: [
            { title: 'Home', path: '/react-portfolio-tjh' },
            { title: 'About', path: '/about' },
            { title: 'Workflow', path: '/workflow' },
            { title: 'Contact', path: '/contact' }
        ],
        home: {
            title: 'Creative, logical, and slightly humorous.',
            subTitle: 'Web stuff with a brighter future in mind!',
            text: 'I drink coffee. I draw. I write clean code. I\'m a front-end engineer and digital creator embracing new technologies so I can create awesome user experiences. Check out some of my work below!'
        },
        about: {
            title: 'About Tom'
        },
        workflow: {
            title: 'Tom\'s Workflow'
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
                <Container className="main-container" fluid={true}>
                    <Navbar className="border-bottom" bg="transparent" expand="lg">
                        <Navbar.Brand className="font-weight-bold">
                            <h1 className="d-inline-block navbar-title">{this.state.title}
                                <span className="font-italic">{this.state.subtitle}</span></h1>
                        </Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link text-uppercase p-0" to="/react-portfolio-tjh">Home</Link>
                                <Link className="nav-link text-uppercase p-0 pl-md-5" to="/about">About</Link>
                                <Link className="nav-link text-uppercase p-0 pl-md-5" to="/workflow">Workflow</Link>
                                <Link className="nav-link text-uppercase p-0 pl-md-5" to="/contact">Let&rsquo;s Chat</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route path="/react-portfolio-tjh" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
                    <Route path="/workflow" render={() => <AboutPage title={this.state.workflow.title} />} />
                    <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
                </Container>
                <Footer />
            </Router >
        );
    }
}

export default App;
