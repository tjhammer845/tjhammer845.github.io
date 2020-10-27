import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

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
            <h1 onClick={this.onClick} className='d-inline-block navbar-title m-0'>{this.props.title}</h1>
            <span className='font-italic'>{this.props.subtitle}</span>
            <Toggle hidden={this.state.hidden}>I am toggle</Toggle>
        </div>;
    }
}

export default ToggleBrand;