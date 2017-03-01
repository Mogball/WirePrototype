import React, {Component} from 'react';

import {
    View,
    TouchableNativeFeedback,
    Text
} from 'react-native';

import {
    Icon
} from 'react-native-elements';

import styles from './PayScreenActionPanelButtonStyle';

export default class PayScreenActionPanelButton extends Component {
    render() {
        return (
            <View style={styles.toplevel}>
                <View style={styles.btnContainer}>
                    <TouchableNativeFeedback
                        onPress={this.props.onPress}
                        background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.3', true)}>
                        <View style={styles.btnContainer}>
                            <Icon
                                name={this.props.iconName}
                                type={this.props.iconType}
                                size={this.props.iconSize}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}