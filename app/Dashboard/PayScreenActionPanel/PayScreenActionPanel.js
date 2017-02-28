import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';

import styles from './PayScreenActionPanelStyle';
import PayScreenActionPanelButton from './PayScreenActionPanelButton';

export default class PayScreenActionPanel extends Component {
    render() {
        return (
            <View style={styles.toplevel}>
                <View style={styles.btnContainer}>
                    <PayScreenActionPanelButton
                    iconType="font-awesome"
                    iconName="send"
                    iconSize={35}/>
                    <PayScreenActionPanelButton
                    iconType="materialicons"
                    iconName="call-received"
                    iconSize={40}/>
                </View>
            </View>
        );
    }
}