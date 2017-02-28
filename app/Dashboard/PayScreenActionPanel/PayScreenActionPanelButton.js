import React, {Component} from 'react';

import {
    View
} from 'react-native';

import {
    Icon
} from 'react-native-elements';

import styles from './PayScreenActionPanelButtonStyle';

export default class PayScreenActionPanelButton extends Component {
    render() {
        return (
            <View style={styles.toplevel}>
                <Icon
                    containerStyle={styles.btnContainer}
                    name={this.props.iconName}
                    type={this.props.iconType}
                    size={this.props.iconSize}/>
            </View>
        )
    }
}