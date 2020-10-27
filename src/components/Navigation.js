import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Toggle extends React.Component {
    render() {
        return <div>
            <CSSTransitionGroup
                transitionName="toggle"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                {this.props.hidden ? null : <div className="toggle-base">{this.props.children}</div>}
            </CSSTransitionGroup>
        </div>
    }
}
class Navigation extends React.Compoent {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { hidden: true };
    }
    onClick = () => {
        this.setState((prevState, props) => ({
            hidden: !(prevState.hidden)
        }))    //alert(CSSTransitionGroup);
    }
    render() {

        return (
            <Navbar className='sticky-inner border-bottom' expand='lg' >
                <Navbar.Brand className='font-weight-bold'>
                    <h1 className='d-inline-block navbar-title m-0' onClick={this.onClick}>{this.props.title}</h1>
                    <Toggle hidden={this.state.hidden} className='font-italic'>{this.props.subtitle}</Toggle>
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
}

export default Navigation;