import React from 'react';

class ToggleBrand extends React.Component {
    state = {
        opened: false // Initially search form is Closed
    };

    toggleOpened = () =>
        this.setState(state => ({ ...state, opened: !state.opened }));

    render() {
        const { opened } = this.state;
        /* This CSS style is applied when the drawer is opened */
        const openedStyle = {
            maxWidth: '100%' /* max-with is 100% when the drawer is opened */,
            opacity: 1 /* opened drawer is opaque */,
            /* Upon transitioning to Open,
               animate `max-width' for 0.5s and opacity for 0.2s */
            transition: 'max-width 0.5s, opacity 0.2s'
        };

        /* This CSS style is applied when the drawer is closed */
        const closedStyle = {
            maxWidth: 0 /* max-width is 0 in the closed drawer */,
            opacity: 0 /* closed drawer is transparent */,
            /* Upon transitioning to Closed,
               animate `max-width' for 0.5s
               and 'opacity' for 0.2s  with 0.3s delay */
            transition: 'max-width 0.5s, opacity 0.2s 0.3s'
        };
        return (
            <div className="drawer-container col-12 col-md-4">
                <input
                    type="text"
                    className="drawer"
                    style={opened ? openedStyle : closedStyle}
                />
                <button
                    type="button"
                    className="open-close-button btn btn-primary"
                    onClick={this.toggleOpened}
                >
                    {opened ? 'Close' : 'Open'}
                </button>
            </div>
        );
    }
}

export default ToggleBrand;