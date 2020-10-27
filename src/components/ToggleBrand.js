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
            <div onClick={this.onClick}>Click me1</div>
            <Toggle hidden={this.state.hidden}>I am toggle</Toggle>
            <div>Something else.</div>
        </div>;
    }
}

export default ToggleBrand;