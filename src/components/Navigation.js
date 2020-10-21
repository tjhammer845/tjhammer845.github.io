import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './Logo';


function Navigation(props) {
    let page = props.location.pathname.substr(1);
    if (!page) page = 'home';
    return (
        <Navbar className='sticky-inner border-bottom' expand='lg'>
            <Navbar.Brand className='font-weight-bold'>
                <CSSTransitionGroup
                    transitionName="background"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                >
                    <Logo page={page} key={page} />
                </CSSTransitionGroup>
                <h1 className='d-inline-block navbar-title m-0'>{props.title}
                    <span className='d-none font-italic'>{props.subtitle}</span></h1>
            </Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
                <Nav className='ml-auto'>
                    <Link className='nav-link text-uppercase p-0' to='/react-portfolio-tjh'>Home</Link>
                    <Link className='nav-link text-uppercase p-0 pl-lg-5' to='/about'>About</Link>
                    <Link className='nav-link text-uppercase p-0 pl-lg-5' to='/workflow'>Workflow</Link>
                    <Link className='nav-link text-uppercase p-0 pl-lg-5' to='/contact'>Let&rsquo;s Chat</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;