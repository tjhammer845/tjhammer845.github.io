import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './portfolio-styles.css';

import Sticky from './components/Sticky';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkflowPage from './pages/WorkflowPage';
import ContactPage from './pages/ContactPage';
import tomAndBentleyImg from './assets/images/about-image.jpg';


class App extends React.Component {
    state = {
        siteTitle: 'TH | Front-End Engineer and Digital Creator',
        title: 'Tom Hammer ',
        subtitle: ' | Front-End Engineer and Digital Creator',
        headerLinks: [
            { title: 'Home', path: '/react-portfolio-tjh' },
            { title: 'About', path: '/about' },
            { title: 'Workflow', path: '/workflow' },
            { title: 'Contact', path: '/contact' }
        ],
        home: {
            title: 'Creative, logical, and always learning.',
            subTitle: 'Web stuff with a brighter future in mind!',
            text: 'I drink coffee. I draw. I write clean code. I\'m a front-end engineer and digital creator embracing new technologies so I can create awesome user experiences. Check out some of my work below!'
        },
        about: {
            images: [
                {
                    id: 0,
                    src: tomAndBentleyImg,
                    title: 'Tom and his nephew Bentley',
                    description: 'Who doesn\'t love a cute dog pic?'
                }
            ],
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
                <Container className='main-container' fluid={true}>
                    <Sticky {...this.state} />
                    <Route path='/react-portfolio-tjh' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path='/about' render={() => <AboutPage about={this.state.about} title={this.state.about.title} />} />
                    <Route path='/workflow' render={() => <WorkflowPage title={this.state.workflow.title} />} />
                    <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} />} />
                </Container>
                <Footer />
            </Router >
        );
    }
}

export default App;
