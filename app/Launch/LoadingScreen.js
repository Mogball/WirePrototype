import React, {Component} from 'react';

import {
    ActivityIndicator,
    View,
    StatusBar
} from 'react-native';

import SessionModel from '../Models/SessionModel';
import styles from './Style';
import palette from '../Style/Palette';

/**
 * This component is the first to appear when the user launches a new instance of the app.
 */
export default class LoadingScreen extends Component {

    static get defaultProps() {
        return {title: 'LoadingScreen'};
    }

    constructor(props) {
        super(props);
        // TODO preload all necessary content
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
        // TODO display activity indicator while preloading
        return (
            <View style={styles.loadScreenToplevel} animated={true}>
                <StatusBar backgroundColor={palette.indigoDark2}/>
            </View>
        );
    }

}