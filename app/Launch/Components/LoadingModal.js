import React, {Component} from 'react';

import {
    Modal,
    View,
    ActivityIndicator,
    Text,
    TouchableNativeFeedback
} from 'react-native';

import style from '../Style';
const palette = require('../../Style/Palette').default;

export default class LoadingModal extends Component {
    render() {
        const item = !this.props.loading && this.props.visible ? (
            <Text style={style.modalText}>Incorrect email/phone or password</Text>
        ) : (
            <ActivityIndicator style={style.loadingIndicator} size="large"/>
        );
        return (
            <Modal visible={this.props.visible}
                   transparent={true}
                   onRequestClose={this.props.close}
                   animationType={"fade"}>
                <View style={style.loadingModalToplevel}>
                    <View style={style.loadingModalDisplay}>
                        <View style={style.loadingIndicatorContainer}>
                            {item}
                        </View>
                        <ModalButton close={this.props.close} loading={!this.props.loading && this.props.visible}/>
                    </View>
                </View>
            </Modal>
        );
    }
}

class ModalButton extends Component {
    render() {
        return (
            <View style={style.modalButtonToplevel}>
                <TouchableNativeFeedback onPress={this.props.close}>
                    <View style={style.modalButtonToplevel}>
                        <Text style={style.modalButtonText}>{this.props.loading ? "OK" : "CANCEL"}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}