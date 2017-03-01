import React, {Component} from 'react';

import {
    Modal,
    View,
    ActivityIndicator
} from 'react-native';

import style from '../Style';
const palette = require('../../Style/Palette').default;

export default class LoadingModal extends Component {
    render() {
        return (
            <Modal visible={this.props.visible} transparent={true} onRequestClose={this.props.close}>
                <View style={style.loadingModalToplevel}>
                    <View style={style.loadingModalDisplay}>
                        <ActivityIndicator style={style.loadingIndicator} size="large"/>
                    </View>
                </View>
            </Modal>
        );
    }
}