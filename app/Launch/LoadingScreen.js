import React, {Component} from 'react';

import SessionModel from '../Models/SessionModel';

/**
 * This component is the first to appear when the user launches a new instance of the app.
 */
export default class LoadingScreen extends Component {

    static get defaultProps() {
        return {title: 'LoadingScreen'};
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // TODO redirect user to LoginScreen if not first launch
        if (SessionModel.get().getUser()) {
            this.props.navigator.push({title: 'Dashboard', index: 4});
        } else {
            this.props.navigator.push({title: 'LaunchScreen', index: 1});
        }
    }

    render() {
        // TODO display activity indicator while loading
        return null;
    }

}