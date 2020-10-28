import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

class Toggle extends React.Component {
    render() {
        return <h4 title={this.props.subtitle} className='d-block d-md-inline-block m-0'>
            <CSSTransitionGroup
                transitionName='toggle'
                transitionEnterTimeout={600}
                transitionLeaveTimeout={600}
                className='toggle-base font-italic'
            >
                {this.props.hidden ? null : <span>{this.props.children}</span>}
            </CSSTransitionGroup>
        </h4 >
    }
}

class ToggleBrand extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { hidden: true };
    }
    onClick() {
        this.setState((prevState, props) => ({
            hidden: !(prevState.hidden)
        }))    //alert(CSSTransitionGroup);
    }
    render() {
        return <div className='d-flex align-content-center'>
            <h1 onClick={this.onClick} title={this.props.title} className='d-inline-block navbar-title m-0'>
                <img className='logo' src={this.props.logo.imgSrc} alt={this.props.logo.imgSrc} />
                {this.props.title}</h1>
            <Toggle hidden={this.state.hidden}>{this.props.subtitle}</Toggle>
        </div>;
    }
}

export default ToggleBrand;