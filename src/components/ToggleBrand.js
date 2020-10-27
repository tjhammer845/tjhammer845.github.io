import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

class Toggle extends React.Component {
    render() {
        return <h4 title={this.props.subtitle} className='font-italic'>
            <CSSTransitionGroup
                transitionName='toggle'
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                {this.props.hidden ? null : <div className='toggle-base d-block d-md-inline'>{this.props.children}</div>}
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