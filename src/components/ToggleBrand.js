import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

class Toggle extends React.Component {
    render() {
        return <h4 title={this.props.subtitle} className='d-block d-md-inline'>
            <CSSTransitionGroup
                transitionName='toggle'
                transitionEnterTimeout={600}
                transitionLeaveTimeout={600}
                className='d-flex align-items-center'
            >
                {this.props.hidden ? null : <span className='toggle-base font-italic'>{this.props.children}</span>}
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
        return <div>
            <h1 onClick={this.onClick} title={this.props.title} className='d-inline-block navbar-title m-0'>{this.props.title}</h1>
            <Toggle className='font-italic' hidden={this.state.hidden}>{this.props.subtitle}</Toggle>
        </div>;
    }
}

export default ToggleBrand;