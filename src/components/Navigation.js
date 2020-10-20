import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Navigation(props) {
    const style = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <Navbar className='sticky-inner border-bottom' bg='white' expand='lg'>
            <Navbar.Brand className='font-weight-bold'>
                <h1 className='d-inline-block navbar-title m-0'>{props.title}
                    <span className='d-none font-italic'>{props.subtitle}</span></h1>
            </Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
                <Nav className='ml-auto'>
                    <animated.div style={style}>
                        <Link className='nav-link text-uppercase p-0' to='/react-portfolio-tjh'>Home</Link>
                        <Link className='nav-link text-uppercase p-0 pl-md-5' to='/about'>About</Link>
                        <Link className='nav-link text-uppercase p-0 pl-md-5' to='/workflow'>Workflow</Link>
                        <Link className='nav-link text-uppercase p-0 pl-md-5' to='/contact'>Let&rsquo;s Chat</Link>
                    </animated.div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;